import { ReactiveFormsModule } from '@angular/forms';
import { AddUpdateHeroComponent } from './add-update-hero/add-update-hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    HomeComponent,
    AddUpdateHeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HeroesModule
  ]
})
export class HomeModule { }
