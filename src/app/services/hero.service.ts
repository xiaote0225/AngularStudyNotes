import { Injectable } from '@angular/core';
import { HeroesList } from '../configs/heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeros(){
    return HeroesList;
  }
}
