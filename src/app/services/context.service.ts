import { switchMap, first } from 'rxjs/operators';
import { AuthKey } from './../configs/constant';
import { Observable, of } from 'rxjs';
import { AccountService } from './account.service';
import { UserService } from './user.service';
import { WindowService } from 'src/app/services/window.service';
import { Injectable } from '@angular/core';
import { Hero } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(
    private windowServe:WindowService,
    private userServe:UserService,
    private accountServe:AccountService
  ) { }

  setContext():Observable<Hero | false>{
    const auth = this.windowServe.getStorage(AuthKey);
    return new Observable(observer => {
      if(auth){
        this.userServe.user$.pipe(
          switchMap(user => {
            if(user){
              return of(user);
            }
            return this.accountServe.account();
          }),
          first()
        ).subscribe(res => {
          let user:Hero;
          if('token' in res){
            this.windowServe.setStorage(AuthKey,res.token);
            this.userServe.setUser(res.user);
            user = res.user;
          }else{
            user = res;
          }
          observer.next(user);
        });
      }else{
        observer.next(false);
      }
      observer.complete();
    });
  }
}
