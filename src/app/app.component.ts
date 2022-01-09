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
  isPrimary = true;
  btnCls = 'btn btn-primary';
  btnCls2 = ['btn','btn-primary'];
  btnCls3 = {
    'btn': true,
    'btn-primary': true
  }

  style1 = 'color: red;border: 1px solid';
  style2 = ['width','100px'];
  style3 = {
    color: '#bf3349',
    backgroundColor: '#e0ff95'
  }
}
