import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-insert-remove',
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('myInsertRemoveTrigger',[
      transition(':enter',[
        style({opacity:0}),
        animate(2000,style({opacity:1}))
      ]),
      transition(':leave',animate(500,style({opacity:0})))
    ])
  ]
})
export class InsertRemoveComponent implements OnInit {
  isShown = true;
  constructor() { }

  ngOnInit(): void {
  }

}
