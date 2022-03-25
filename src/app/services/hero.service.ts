import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesList } from '../configs/heroes';

@Injectable({
  providedIn:'root'
})
export class HeroService {
  private prefix = '/api/hero/';
  constructor(private http:HttpClient) { }

  getHeros(){
    return HeroesList;
  }

  heroes(){
    this.http.get(this.prefix + "list").subscribe(res => {
      console.log(res);
    });
  }
}
