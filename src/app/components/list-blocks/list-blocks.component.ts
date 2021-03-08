import { Component } from '@angular/core';

import { ListCardsBlocks } from './../../shared/interfaces/list-cards-blocks';
import { listCardsBlocks } from './mock.listCardsBlocks';

@Component({
  selector: 'app-list-blocks',
  templateUrl: './list-blocks.component.html',
  styleUrls: ['./list-blocks.component.scss']
})
export class ListBlocksComponent {

  animationListBlock = false;
  listCardsBlocks: ListCardsBlocks[] = listCardsBlocks;

  constructor() { }

  disabledAnimationListBlock = () => this.animationListBlock = false;

  activeBlock = (props: ListCardsBlocks) => props.active = !props.active;
  
  addBlockGrid = (props: ListCardsBlocks) => {
    if(this.listCardsBlocks.length === 1) {
      return;
    }
    this.activeBlock(props);
    this.animationListBlock = true;
    setTimeout(this.disabledAnimationListBlock, 100);
  }

  removeBlockList = (props: ListCardsBlocks) => {
    props.removeBlockView = true;
    setTimeout(() => {
      this.listCardsBlocks = this.listCardsBlocks.filter((block: ListCardsBlocks) => {
        return block.index !== props.index;
      });
    }, 400);
  }

  addBlockList = () => {
    const amountCardsBlocks = this.listCardsBlocks.length + 1;

    this.listCardsBlocks.push(
      {
        active: true,
        removeBlockView: false,
        index: amountCardsBlocks,
      },
    )
  }
}
