import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HeroesModule { }
