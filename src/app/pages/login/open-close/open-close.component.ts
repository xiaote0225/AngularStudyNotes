import { animate, keyframes, state, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

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
        // height:'100px',
        height:'*',
        opacity:0.5,
        backgroundColor:'green'
      })),
      // transition('open => closed',[
      //   animate('.3s',style({
      //     height:'300px',
      //     backgroundColor:'blue'
      //   })),
      //   animate('2s')
      // ]),
      // transition('closed => open',[
      //   animate('0.5s')
      // ])
      transition('* => *',[
        animate('1s',keyframes([
          style({opacity:0.1,backgroundColor:'red',offset:0.1}),
          style({opacity:0.6,backgroundColor:'orange',offset:0.2}),
          style({opacity:1,backgroundColor:'green',offset:0.4}),
          style({opacity:0.2,backgroundColor:'brown',offset:0.7}),
        ]))
      ])
    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  isDisabled = false;
  constructor() { }

  @HostBinding('@.disbaled')
  public animationDisabled = false;

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen = !this.isOpen;
  }

  onAnimationEvent(event:AnimationEvent){
    // openClose is trigger name in this example
    console.log(`Animation Trigger: ${event.triggerName}`);
    // phaseName is start or done
    console.log(`Phase: ${event.phaseName}`);
    // in our example, totalTime is 1000 or 1 second
    console.log(`Total time: ${event.totalTime}`);
    // in our example, fromState is either open or closed
    console.log(`From: ${event.fromState}`);
    // in our example, toState either open or closed
    console.log(`To: ${event.toState}`);
    // the HTML element itself, the button in this case
    console.log(`Element: ${event.element}`);
  }

}
