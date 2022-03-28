import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';
import { WindowService } from '../window.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private userServe: UserService,private windowServe:WindowService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.userServe.user$.pipe(
      switchMap(user => {
        if (user) {
          this.router.navigateByUrl('/home/heroes').then(() => {
            // alert('您已登陆，不需要重复登陆');
            this.windowServe.alert('您已登陆，不需要重复登陆');
          });
          return of(false);
        }
        return of(true);
      })
    );
  }

}
