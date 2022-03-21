import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild,CanLoad {
  constructor(private authService:AuthService,private router:Router){}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const url = `${route.path}`;
    console.log('canLoad url',url);
    console.log('canLoad segments',segments);
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    console.log('canActivateChild url',url);
    return this.checkLogin(url);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    const url = state.url;
    console.log('canActivate url',url);
    return this.checkLogin(url);
  }

  checkLogin(url:string):boolean{
    if(this.authService.isLoggedIn){
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    console.log('auth guard checkLogin',url);

    // Redirect to the login page
    // return this.router.parseUrl('/login');
    // return this.router.createUrlTree(['/login'],{
    this.router.navigate(['/login'],{
      queryParams:{session_id:1234567,name:'张三'},
      fragment:'anchor'
    });
    return false;


  }



}
