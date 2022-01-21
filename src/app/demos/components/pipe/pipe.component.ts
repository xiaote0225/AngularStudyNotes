import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../hero';
import { Hero } from '../../types';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  object:{[key:number]:string} = {2:'foo',1:'bar'};
  map = new Map([[2,'foo'],[1,'bar']]);
  power = 5;
  factor = 1;

  heroes: Hero[] = [];
  canFly = true;
  constructor() { }

  ngOnInit(): void {
  }

  addHero(name: string):void{
    name = name.trim();
    if(name){
      //不改变引用没有用
      this.heroes.push({id:'filter_'+Date.now(),name,canFly:this.canFly});
      //改变引用
      // this.heroes = [...this.heroes,{id:'filter_'+Date.now(),name,canFly:this.canFly}]
    }
  }
  reset(){
    this.heroes = HEROES.slice();
  }

}
