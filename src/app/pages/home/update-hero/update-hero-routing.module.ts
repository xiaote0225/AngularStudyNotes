import { HeroAuthGuard } from 'src/app/services/guards/hero-auth.guard';
import { HeroCanDeactivateGuardGuard } from 'src/app/services/guards/hero-can-deactivate-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateHeroComponent } from '../add-update-hero/add-update-hero.component';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateHeroComponent,
    canDeactivate:[HeroCanDeactivateGuardGuard],
    canActivate:[HeroAuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateHeroRoutingModule { }
