import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddHeroComponent } from 'src/app/pages/home/add-hero/add-hero.component';

@Injectable({
  providedIn: 'root'
})
export class HeroCanDeactivateGuardGuard implements CanDeactivate<AddHeroComponent> {
  canDeactivate(
    component: AddHeroComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return component.canDeactivate();
  }

}
