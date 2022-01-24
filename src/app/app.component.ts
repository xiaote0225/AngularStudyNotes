import { Component, ChangeDetectionStrategy } from '@angular/core';
export interface Hero{
  name:string;
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
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
