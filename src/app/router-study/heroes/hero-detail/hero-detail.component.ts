import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {

  hero$:Observable<Hero | undefined>;
  constructor(private router:Router,private route:ActivatedRoute,private heroServe:HeroService) { }

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(switchMap(params => {
      return this.heroServe.getHero(params.get('id')!);
    }));
  }

  back(id:number){
    this.router.navigate(['/heroes',{id}]);
  }

}
