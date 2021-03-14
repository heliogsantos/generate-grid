import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  darkMode: boolean;
  lightColors = {
    bgColor1: '#1b1d20',
    bgColor2: '#0e1013',
    textColor: '#ffffff'
  }

  insertColor = (target: string, color: string) => {
   return document.querySelector('html').style.setProperty(target, color);
  }

  constructor() { }
  
  ngDoCheck() {
    if(this.darkMode) {
      this.insertColor('--bg-color-1', '#ffffff');
      this.insertColor('--bg-color-2', '#1b1d20');
      this.insertColor('--color-text', '#1b1d20');
    } else {
      this.insertColor('--bg-color-1', this.lightColors.bgColor1);
      this.insertColor('--bg-color-2', this.lightColors.bgColor2);
      this.insertColor('--color-text', this.lightColors.textColor);
    }
  }
}
