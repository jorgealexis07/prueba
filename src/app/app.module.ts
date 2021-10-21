import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {componentFactoryName} from "@angular/compiler";
import {PiedepaginaComponent} from "./piedepagina/piedepagina.component";
import {PiedepaginaModule} from "./piedepagina/piedepagina.module";
import {MenuschoologyModule} from "./menuschoology/menuschoology.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PiedepaginaModule,
    MenuschoologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
