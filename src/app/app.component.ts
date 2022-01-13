import { Component, ViewChild, NgModule, TemplateRef, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Heroes } from './configs/heroes';
export interface Hero{
  name:string;
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `
  //   <h1 class="title">{{title}}</h1>
  //   <p>name666:{{heroName}}</p>
  //   <div>{{testVal}}</div>
  // `,
  // styles: [`
  //   .title,p{
  //     color: red;
  //   }
  //   div{
  //     color: pink;
  //   }
  // `]
})
export class AppComponent{
  heros:Hero[] = Heroes;
  value = '';
  time:any = null;
  add():void{
    const count = this.heros.length + 1;
    this.heros.push({
      id: count,
      name: this.value
    });
  }
  reset():void{
    this.heros = [
      {name:'hero01',id:1},
      {name:'hero02',id:22},
      {name:'hero03',id:3},
      {name:'hero04',id:44},
      {name:'hero05',id:5},
      {name:'hero06',id:66},
      {name:'hero07',id:7},
      {name:'hero08',id:88},
      {name:'hero09',id:9},
      {name:'hero10',id:1010},
    ];
  }
  trackByHero(hero:Hero):string{
    return hero.name;
  }
}
