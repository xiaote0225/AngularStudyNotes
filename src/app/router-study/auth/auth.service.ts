import { delay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable, Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  //保存登陆成功后要跳回去的路径
  redirectUrl:string;

  login():Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout():void{
    this.isLoggedIn = false;
  }

  constructor() {
    console.log('AuthService..........constructor........');
  }
}
