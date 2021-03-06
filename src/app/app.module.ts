import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ListBlocksComponent } from './components/list-blocks/list-blocks.component';
import { CodeGenerateComponent } from './components/code-generate/code-generate.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBlocksComponent,
    CodeGenerateComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
