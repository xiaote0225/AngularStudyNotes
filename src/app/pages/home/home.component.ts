import { filter, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  breadcrumb:string[] = [];
  constructor(private route:ActivatedRoute,private router:Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      // tap(() => {
      //     console.log(this.route);
      //     console.log(this.route.firstChild);
      //   }
      // ),
      switchMap(() => this.route.firstChild?.data!)
    ).subscribe(data => {
      if(data.breadcrumb?.length){
        this.breadcrumb = data.breadcrumb;
      }
    });
  }

  ngOnInit(): void {
  }

}
