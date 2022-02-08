import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {

  heroes$:Observable<Hero[]>;
  selectedId:number;
  constructor(private heroServe:HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.heroServe.getHeroes();
  }

  onSelect(id:number){
    this.selectedId = id;
  }

}
