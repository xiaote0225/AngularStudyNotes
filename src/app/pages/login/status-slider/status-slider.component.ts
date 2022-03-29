import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-status-slider',
  templateUrl: './status-slider.component.html',
  styleUrls: ['./status-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('slideStatus',[
      state('inactive',style({backgroundColor:'blue'})),
      state('active',style({backgroundColor:'orange'})),
      transition('* => active',[
        animate('2s',keyframes([
          style({backgroundColor:'blue'}),
          style({backgroundColor:'red'}),
          style({backgroundColor:'orange'})
        ]))
      ]),
      transition('* => inactive',[
        animate('10s',keyframes([
          style({backgroundColor:'blue'}),
          style({backgroundColor:'red'}),
          style({backgroundColor:'orange'})
        ]))
      ])
    ])
  ]
})
export class StatusSliderComponent implements OnInit {
  status: 'active' | 'inactive' = 'inactive';
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    if(this.status === 'active'){
      this.status = 'inactive';
    }else{
      this.status = 'active';
    }
  }

}
