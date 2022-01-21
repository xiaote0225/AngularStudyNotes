import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../types';

@Pipe({
  name: 'flyingHeroesImpure',
  pure:false
})
export class FlyingHeroesImpurePipe implements PipeTransform {

  transform(value: Hero[]): Hero[] {
    console.log('FlyingHeroesImpurePipe transform');
    return value.filter(hero => hero.canFly);
  }

}
