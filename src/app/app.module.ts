import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M1Module } from './my-module/m1/m1/m1.module';
import { Test2Module } from './my-module/test2/test2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    M1Module,
    Test2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
