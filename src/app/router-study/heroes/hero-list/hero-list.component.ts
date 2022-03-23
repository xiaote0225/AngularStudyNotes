import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {

  heroes$:Observable<Hero[]>;
  selectedId:number;
  constructor(private heroServe:HeroService,private router:Router,private route:ActivatedRoute) {
    this.router.events
      .pipe(filter(events => events instanceof NavigationStart))
      .subscribe((event:any) => {
        console.log('start event',event);
        console.log(this.router.parseUrl(event.url));
      });
    this.router.events
      .pipe(filter(events => events instanceof NavigationEnd))
      .subscribe((event:any) => {
        console.log('end event',event);
        console.log(this.router.parseUrl(event.url));
      });
  }




  ngOnInit(): void {
    this.heroes$ = this.heroServe.getHeroes();
    this.selectedId = +this.route.snapshot.paramMap.get('id')!;
    this.getQueryName();
    console.log('this.route.snapshot.routeConfig',this.route.snapshot.routeConfig);
    console.log('this.route.snapshot.url',this.route.snapshot.url);
    console.log('this.route.snapshot.params',this.route.snapshot.params);
    console.log('this.route.snapshot.queryParams',this.route.snapshot.queryParams);
    console.log('this.route.snapshot.fragment',this.route.snapshot.fragment);

  }

  private getQueryName(){
    console.log(this.route.snapshot.queryParamMap.get('name'));
  }

  onSelect(id:number){
    // this.selectedId = id;
    // this.router.navigate(['/hero',id]);
    this.router.navigateByUrl('/hero/'+id);
  }

}
