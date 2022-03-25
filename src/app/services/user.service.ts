import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../types';

@Injectable({
  providedIn:'root'
})
export class UserService {
  // private sub = new Subject<Hero | null>();
  private sub = new BehaviorSubject<Hero | null>(null);
  readonly user$ = this.sub.asObservable();
  constructor() { }

  setUser(user:Hero){
    this.sub.next(user);
  }
  // getUser():Observable<Hero | null>{
  //   return this.sub.asObservable();
  // }
  clearUser():void{
    this.sub.next(null);
  }
}
