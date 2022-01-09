import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1 class="title">{{title}}</h1>
    <p>name666:{{heroName}}</p>
    <div>{{testVal}}</div>
  `,
  // styleUrls: ['./app.component.scss']
  styles: [`
    .title,p{
      color: red;
    }
    div{
      color: pink;
    }
  `]
})
export class AppComponent {
  title = 'hero';
  heroName = '王逊';
  testVal = '这是一个测试对应的值';
}
