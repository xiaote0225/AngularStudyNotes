import { Component, ViewChild, NgModule, TemplateRef, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  condition = true;
  condition1 = true;
  condition2 = true;
  condition3 = true;

  condition3Ref!: TemplateRef<any>;
  @ViewChild('condition3Tempate',{static:true}) condition3Tempate!: TemplateRef<any>;

  ngOnInit(): void {
    console.log('condition3Tempate',this.condition3Tempate);
    this.condition3Ref = this.condition3Tempate;
  }
}
