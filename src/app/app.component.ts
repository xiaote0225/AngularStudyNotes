import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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
  constructor(private router:Router){
    console.log('------',this.router.onSameUrlNavigation);
    console.log('environment.baseUrl',environment.baseUrl);
  }

  toCrisisCenter(){
    // this.router.navigateByUrl('/crisis-center');
    this.router.navigate(['/crisis-center']);
  }

  toHeroes(){
    // this.router.navigateByUrl('/heroes');
    this.router.navigate(['/heroes']);
  }

  alertResult(...args:number[]){
    import('./number').then(({default:d,add}) => {
      console.log('d',d);
      alert(add(args));
    });
  }
}
