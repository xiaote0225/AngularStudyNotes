import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesList } from '../configs/heroes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:'root'
})
export class HeroService {
  // private prefix = '/api/hero/';
  private prefix = environment.baseUrl + '/hero';
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
