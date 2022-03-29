import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { AuthKey } from './../../configs/constant';
import { AccountService } from './../../services/account.service';
import { UserService } from './../../services/user.service';
import { filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Inject } from '@angular/core';
import { Hero } from 'src/app/types';
import { combineLatest } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('routeAnimations',[
      transition('* <=> *',[
        style({position:'relative'}),
        query(':enter,:leave',[
          style({
            position:'absolute',
            top:0,
            left:0,
            width:'100%'
          })
        ],{optional:true}),
        query(':enter',[
          style({left:'-100%'})
        ],{optional:true}),
        group([
          query(':leave',[
            animate(300,style({left:'100%'}))
          ],{optional:true}),
          query(':enter',[
            animate(300,style({left:0}))
          ],{optional:true})
        ]),
        query(':enter',animateChild())
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentUser:Hero | null;
  // currentUser$: Observable<Hero | null>;
  breadcrumb:string[] = [];
  constructor(private route:ActivatedRoute,private router:Router,private userServe:UserService,private cdr:ChangeDetectorRef,@Inject(DOCUMENT) private doc:Document,private accountServe:AccountService,private windowServe:WindowService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      // tap(() => {
      //     console.log(this.route);
      //     console.log(this.route.firstChild);
      //   }
      // ),
      // switchMap(() => {
      //   return combineLatest(
      //     this.route.firstChild?.data!,
      //     this.userServe.user$
      //   )
      // })
      switchMap(() => this.route.firstChild?.data!)
    ).subscribe(data => {
      console.log('NavigationEnd');
      if(data.breadcrumb?.length){
        this.breadcrumb = data.breadcrumb;
      }
      // this.currentUser = user;
    });

    console.log('Document doc',this.doc);
  }

  logout(){
    this.accountServe.logout().subscribe(() => {
      this.windowServe.removeStorage(AuthKey);
      this.userServe.clearUser();
      this.router.navigateByUrl('/login').then(() => {
        this.windowServe.alert('退出成功');
      });
    });
  }

  ngOnInit(): void {
    console.log('home ngOnInit-----------------');
    this.userServe.user$.subscribe(user => {
      this.currentUser = user;
    })
    // this.userServe.getUser().subscribe(user => {
    //   this.currentUser = user;
    //   console.log('home userServe user',this.currentUser);
    //   setTimeout(() => {
    //     this.cdr.markForCheck();
    //   }, 500);
    // });
    // this.currentUser$ = this.userServe.getUser();
  }

  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
