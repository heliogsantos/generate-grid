import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  darkMode: boolean;

  colors = {
    ligth: '#1b1d20',
    dark: '#0e1013',
    white: '#ffffff'
  }

  variablesRootCss = {
    bgColor1: '--bg-color-1',
    bgColor2: '--bg-color-2',
    colorText: '--color-text',
  }

  insertColor = (target: string, color: string) => document.querySelector('html').style.setProperty(target, color);

  constructor() { }
  
  ngDoCheck() {
    const { bgColor1, bgColor2, colorText } = this.variablesRootCss;
    const { ligth, dark, white } = this.colors;

    if(this.darkMode) {
      this.insertColor(bgColor1, white);
      this.insertColor(bgColor2, ligth);
      this.insertColor(colorText, dark);
    } else {
      this.insertColor(bgColor1, dark);
      this.insertColor(bgColor2, dark);
      this.insertColor(colorText, white);
    }
  }
}
