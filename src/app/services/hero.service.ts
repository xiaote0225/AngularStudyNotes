import { Base } from './../types';
import { catchError, map, timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Hero, HeroArg, UpdateHeroArg } from 'src/app/configs/types';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesList } from '../configs/heroes';
import { environment } from 'src/environments/environment';
import { stringify } from 'qs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // private prefix = '/api/hero/';
  private prefix = environment.baseUrl + '/hero/';
  constructor(private http: HttpClient) { }

  getHeros() {
    return HeroesList;
  }

  heroes(args: HeroArg): Observable<Hero[]> {
    const params = new HttpParams({ fromString: stringify(args) });
    return this.http.get<Base<Hero[]>>(this.prefix + 'list', { params }).pipe(
      // timeout(2000),
      map((res: Base<Hero[]>) => res.data!),
      // catchError(error => this.handleError(error))
    );
  }

  addHero(args:UpdateHeroArg):Observable<Base<void>>{
    return this.http.post<Base<any>>(this.prefix + 'add',args).pipe(
      map((res:Base<any>) => res.data),
      // catchError(error => this.handleError(error))
    );
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   console.log('error', error);
  //   if (typeof error.error?.code === 'number') { //后台拒绝请求
  //     alert(error.error.message);
  //   } else {
  //     alert('请求失败');
  //   }
  //   return throwError(error);
  // }
}
