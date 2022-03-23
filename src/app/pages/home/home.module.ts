import { UpdateHeroComponent } from './update-hero/update-hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroesModule
  ]
})
export class HomeModule { }
