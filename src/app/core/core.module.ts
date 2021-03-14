import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
