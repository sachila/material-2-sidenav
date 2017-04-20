import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'; 

import { AppComponent } from './app.component';
import { menu } from './shell/menu/rasm-menu';

let imports = [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    menu
  ],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
