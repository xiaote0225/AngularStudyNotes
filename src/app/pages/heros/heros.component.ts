import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/types';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers:[HeroService]
})
export class HerosComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };
  showSpin = false;
  heros:Hero[];
  constructor(readonly heroService:HeroService) {
    this.heros = this.heroService.getHeros();
  }

  ngOnInit(): void {
  }

}
