import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCanDeactivateGuardGuard } from 'src/app/services/guards/hero-can-deactivate-guard.guard';
import { AddHeroComponent } from './add-hero.component';

const routes: Routes = [
  {path:'',component:AddHeroComponent,canDeactivate: [HeroCanDeactivateGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddHeroRoutingModule { }
