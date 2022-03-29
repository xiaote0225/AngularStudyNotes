import { first } from 'rxjs/operators';
import { WindowService } from './../../../services/window.service';
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
  constructor(private heroService: HeroService, private cdr: ChangeDetectorRef,private windowServe:WindowService) {
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
    // this.heroService.heroes(this.searchParams).subscribe(heroes => {
    //   this.heroes = heroes;
    //   this.showSpin = false;
    //   this.cdr.markForCheck();
    // }, () => {
    //   this.showSpin = false;
    //   this.cdr.markForCheck();
    // });
    this.heroService.heroes(this.searchParams).pipe(first()).subscribe({
      next:heroes => {
        this.heroes = heroes;
      },
      complete: () => {
        this.showSpin = false;
        this.cdr.markForCheck();
      }
    })
  }

  delHero(id:string){
    const confirm = this.windowServe.confirm('确定删除该英雄');
    if(confirm){
      this.heroService.delHero(id).pipe(first()).subscribe(() => {
        this.windowServe.alert('删除成功');
        this.getList();
      });
    }
  }

}
