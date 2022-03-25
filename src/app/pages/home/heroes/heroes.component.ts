import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/types';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };
  showSpin = false;
  heroes:Hero[];
  constructor(private heroService:HeroService) {
    this.heroes = this.heroService.getHeros();
  }

  ngOnInit(): void {
    this.heroService.heroes();
  }

  search(){
    console.log(this.searchParams);
  }

}
