import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Observable<Hero[]>{
    return of(HEROES);
  }

  getHero(id:number|string):Observable<Hero | undefined>{
    return this.getHeroes().pipe(
      map((heroes:Hero[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
