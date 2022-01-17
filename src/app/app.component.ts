import { TransferItem } from './transfer-panel/types';
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

}
