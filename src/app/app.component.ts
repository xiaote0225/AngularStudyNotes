import { Component } from '@angular/core';

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
  madaoPic = '../assets/desk.png';
  user = 'desk';
  colspan = 3;
  isDisabled = true;
  customTitle = 'custom-title6666';
  customTitle2 = 'customTitle2777';
  customTitle3 = 'customTitle3888';
  user2 = {
    name: 'madao',
    pic: this.madaoPic
  };
}
