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
  title = '1abcDDDjjjkl';
  obj = {
    name:'name001',
    age:17
  }
  now = Date.now();
  hero:Hero;
  noNullStr: string | null = '';
  item:Hero = {id:888,name:'基督教案例'}
  constructor(){
    setTimeout(() => {
      this.hero = {
        id:444,
        name:'hero_001'
      };
    },3000);
    // 不报错,告诉ts,this.name一定不是null
    const heroNameStr:string = this.noNullStr!;
    // 以上写法相当于
    if(this.noNullStr){
      const heroNameStr: string = this.noNullStr;
    }
  }
}
