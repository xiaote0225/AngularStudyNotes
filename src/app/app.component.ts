import { Component, ViewChild, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

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
export class AppComponent {

  @ViewChild(NgModel) private ngModel!: NgModel;

  name: string = '12';
  engName = 'mike';
  chName = '中国';
  expandVal = '';

  setValue():void{
    this.name = "setValue";
  }

  getModel():void{
    console.log(this.ngModel);
  }

  setModel():void{

  }

}
