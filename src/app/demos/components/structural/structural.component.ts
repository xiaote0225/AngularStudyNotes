import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/configs/types';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {
  show = true;
  fruit = 'apple';

  heros = [{
    id:'hero_4',
    name:'盖伦4'
  },
  {
    id: 'hero_5',
    name: '赵信5'
  },
  {
    id: 'hero_2',
    name: '嘉文'
  },
  {
    id: 'hero_6',
    name: '易大师6'
  },
  {
    id: 'hero_7',
    name: '泰达米尔7'
  }];
  constructor() { }

  ngOnInit(): void {
  }

  trackByHero(index:number,hero:any):string{
    return hero.id;
  }

}
