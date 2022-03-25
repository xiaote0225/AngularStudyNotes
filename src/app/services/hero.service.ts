import { Base } from './../types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero, HeroArg } from 'src/app/configs/types';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesList } from '../configs/heroes';
import { environment } from 'src/environments/environment';
import { stringify } from 'qs';

@Injectable({
  providedIn:'root'
})
export class HeroService {
  // private prefix = '/api/hero/';
  private prefix = environment.baseUrl + '/hero/';
  constructor(private http:HttpClient) { }

  getHeros(){
    return HeroesList;
  }

  heroes(args:HeroArg):Observable<Hero[]>{
    const params = new HttpParams({fromString:stringify(args)});
    return this.http.get<Base<Hero[]>>(this.prefix + 'list' , {params}).pipe(map((res:Base<Hero[]>) => res.data!));
  }
}
