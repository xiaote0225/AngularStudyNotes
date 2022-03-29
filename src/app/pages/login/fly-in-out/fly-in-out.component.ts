import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from 'src/app/app.component';
import { HEROES } from 'src/app/router-study/heroes/mock-heroes';

@Component({
  selector: 'app-fly-in-out',
  templateUrl: './fly-in-out.component.html',
  styleUrls: ['./fly-in-out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('flyInOut',[
      state('in',style({transform:'translateX(20px)'})),
      transition(':enter',[
        style({transform:'translateX(-100%)'}),
        animate(1000)
      ]),
      transition(':leave',animate(500,style({transform:'translateX(100%)'})))
    ])
  ]
})
export class FlyInOutComponent implements OnInit {
  heroes: Hero[] = HEROES;
  constructor() { }
  i = 0;

  ngOnInit(): void {
  }

  add(){
    this.heroes.push({
      id: this.i++,
      name:'name_'+this.i
    });
  }

  remove(id:string|number){
    const index = this.heroes.findIndex(item => item.id === id);
    if(index > -1){
      this.heroes.splice(index,1);
    }
  }

}
