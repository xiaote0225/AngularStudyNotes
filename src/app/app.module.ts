import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';
import { Com5Component } from './com5/com5.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    Com3Component,
    Com4Component,
    Com5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    Com4Component,
    Com5Component
  ]
})
export class AppModule { }
