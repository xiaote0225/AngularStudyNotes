import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'200px',
        opacity:1,
        backgroundColor:'yellow'
      })),
      state('closed',style({
        height:'100px',
        opacity:0.5,
        backgroundColor:'green'
      })),
      transition('open => closed',[
        animate('.3s',style({
          height:'300px',
          backgroundColor:'blue'
        })),
        animate('2s')
      ]),
      transition('closed => open',[
        animate('0.5s')
      ])
    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  constructor() { }
  ngOnInit(): void {
  }
  toggle(){
    this.isOpen = !this.isOpen;
  }

}
