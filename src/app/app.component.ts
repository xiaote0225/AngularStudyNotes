import { ContextService } from './services/context.service';
import { AuthKey } from './configs/constant';
import { filter, first, switchMap, tap } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AccountService } from './services/account.service';
import { EMPTY } from 'rxjs';
import { WindowService } from './services/window.service';
export interface Hero {
  name: string;
  id: number | string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class AppComponent {
  constructor(private router: Router, private userServe: UserService, private accoutServe: AccountService, private windowServe: WindowService, private contextServe: ContextService) {
    // console.log('------',this.router.onSameUrlNavigation);
    // console.log('environment.baseUrl',environment.baseUrl);

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart),
    //   // tap(() => {
    //   //   console.log('app.component--------NavigationStart');
    //   // }),
    //   // switchMap((() => this.userServe.user$)),
    //   // switchMap(user => {
    //   //   // const authKey = localStorage.getItem(AuthKey);
    //   //   const authKey = this.windowServe.getStorage(AuthKey);
    //   //   if (!user && authKey) {
    //   //     return this.accoutServe.account(authKey);
    //   //     // return this.accoutServe.account();
    //   //   }
    //   //   return EMPTY;
    //   // })
    //   switchMap(() => this.contextServe.setContext())
    // ).subscribe(res => {
    //   // localStorage.setItem(AuthKey,token);
    //   // this.windowServe.setStorage(AuthKey, token);
    //   // this.userServe.setUser(user);
    //   // console.log('app set context', res);
    // });

    this.contextServe.setContext().pipe(first()).subscribe();

  }

  toCrisisCenter() {
    // this.router.navigateByUrl('/crisis-center');
    this.router.navigate(['/crisis-center']);
  }

  toHeroes() {
    // this.router.navigateByUrl('/heroes');
    this.router.navigate(['/heroes']);
  }

  alertResult(...args: number[]) {
    import('./number').then(({ default: d, add }) => {
      console.log('d', d);
      alert(add(args));
    });
  }
}
