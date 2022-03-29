import { switchMap } from 'rxjs/operators';
import { WindowService } from 'src/app/services/window.service';
import { ContextService } from './../context.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(
    private contextServe: ContextService,
    private windowServe: WindowService,
    private accountServe: AccountService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.contextServe.setContext().pipe(
      switchMap(user => {
        if (user) {
          return of(true);
        }
        this.accountServe.redirectTo = state.url;
        this.router.navigateByUrl('/login').then(() => {
          this.windowServe.alert('请先登陆');
        });
        return of(false);
      })
    );
  }
}
