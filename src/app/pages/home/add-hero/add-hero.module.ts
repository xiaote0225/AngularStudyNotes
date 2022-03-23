import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHeroRoutingModule } from './add-hero-routing.module';
import { AddHeroComponent } from './add-hero.component';


@NgModule({
  declarations: [
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    AddHeroRoutingModule
  ]
})
export class AddHeroModule { }
