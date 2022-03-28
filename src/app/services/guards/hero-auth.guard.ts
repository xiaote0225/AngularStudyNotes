import { AccountService } from './../account.service';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WindowService } from '../window.service';

@Injectable({
  providedIn: 'root'
})
export class HeroAuthGuard implements CanActivate {
  constructor(private userServe: UserService,private accountServe:AccountService, private router: Router,private windowService:WindowService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const auths: string[] = next.data.auths;
    return this.userServe.user$.pipe(
      switchMap(user => {
        if (user) {
          if (auths.includes(user.role)) {
            return of(true);
          } else {
            this.router.navigateByUrl('/no-auth').then(() => {
              // alert('无权限,请联系管理员');
              this.windowService.alert('无权限,请联系管理员');
            });
            return of(false);
          }
        }
        this.accountServe.redirectTo = state.url;
        this.router.navigateByUrl('/login').then(() => {
          // alert('请先登陆');
          this.windowService.alert('请先登陆');
        });
        return of(false);
      })
    );
  }

}
