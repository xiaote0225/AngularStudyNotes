import { trigger, style, state, transition, sequence, animate } from '@angular/animations';
import { HEROES } from './../../../router-study/heroes/mock-heroes';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from 'src/app/app.component';

@Component({
  selector: 'app-fly-in-out-group',
  templateUrl: './fly-in-out-group.component.html',
  styleUrls: ['./fly-in-out-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('flyInOut',[
      state('in',style({transform:'translateX(20px)'})),
      transition(':enter',[
        sequence([
          animate('1s 1s ease',style({
            width:120
          })),
          animate('1s ease',style({
            height:80
          }))
        ])
      ]),
      transition(':leave',[
        sequence([
          animate('1s ease',style({
            transform:'translateX(50px)',
            width:10
          })),
          animate('1s ease',style({
            height:80
          })),
        ]),
        animate(500,style({transform:'translateX(100%)'}))
      ])
    ])
  ]
})
export class FlyInOutGroupComponent implements OnInit {
  heroes:Hero[] = HEROES;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.heroes.push({
      id: 'hero_38615927113daa647',
      name: '亚索'
    });
  }

  remove(id: string | number) {
    const index = this.heroes.findIndex(item => item.id === id);
    if (index > -1) {
      this.heroes.splice(index, 1);
    }
  }

}
