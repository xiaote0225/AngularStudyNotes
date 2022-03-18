import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const url = state.url;
    console.log('url',url);
    return this.checkLogin(url);
  }

  checkLogin(url:string):true | UrlTree{
    if(this.authService.isLoggedIn){
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    console.log('auth guard checkLogin',url);

    // Redirect to the login page
    return this.router.parseUrl('/login');

  }



}
