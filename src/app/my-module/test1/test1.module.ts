import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1.component';


@NgModule({
  declarations: [
    Test1Component
  ],
  imports: [
    CommonModule,
    Test1RoutingModule
  ]
})
export class Test1Module { }
