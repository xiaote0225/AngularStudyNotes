import { UserService } from './../../services/user.service';
import { filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Hero } from 'src/app/types';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  currentUser:Hero | null;
  // currentUser$: Observable<Hero | null>;
  breadcrumb:string[] = [];
  constructor(private route:ActivatedRoute,private router:Router,private userServe:UserService,private cdr:ChangeDetectorRef) {
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

}
