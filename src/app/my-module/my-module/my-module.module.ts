import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { MyModuleComponent } from './my-module.component';


@NgModule({
  declarations: [
    MyModuleComponent
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ]
})
export class MyModuleModule { }
