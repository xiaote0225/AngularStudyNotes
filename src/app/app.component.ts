import { Component, ChangeDetectionStrategy } from '@angular/core';
import { listToken } from './demos/components/test-service/mobile/mobile-list/mobile-list.component';
import { Mobile2Service } from './demos/components/test-service/mobile/mobile2.service';
export interface Hero{
  name:string;
  id:number|string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  // providers:[{provide:listToken,useValue:'9999'}]
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
  constructor(private mobile2Service:Mobile2Service){
    console.log(this.mobile2Service.getMobile('m2'));
  }
}
