import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUpdateHeroComponent } from 'src/app/pages/home/add-update-hero/add-update-hero.component';

@Injectable({
  providedIn: 'root'
})
export class HeroCanDeactivateGuardGuard implements CanDeactivate<AddUpdateHeroComponent> {
  canDeactivate(
    component: AddUpdateHeroComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return component.canDeactivate();
  }

}
