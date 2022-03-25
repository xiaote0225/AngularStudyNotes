import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/types';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };
  showSpin = false;
  heroes: Hero[];
  constructor(private heroService: HeroService, private cdr: ChangeDetectorRef) {
    this.heroes = this.heroService.getHeros();
  }

  ngOnInit(): void {
    // this.heroService.heroes();
    this.getList();
  }

  search() {
    console.log(this.searchParams);
    this.getList();
  }

  reset() {
    this.searchParams = {
      name: '',
      job: '',
      sort: 'desc'
    };
    this.getList();
  }

  getList() {
    this.showSpin = true;
    this.heroService.heroes(this.searchParams).subscribe(heroes => {
      this.heroes = heroes;
      this.showSpin = false;
      this.cdr.markForCheck();
    }, () => {
      this.showSpin = false;
      this.cdr.markForCheck();
    });
  }

}
