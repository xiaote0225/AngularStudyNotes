import { stagger, animate, style, trigger, transition, query } from '@angular/animations';
import { UserService } from './../../../services/user.service';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Hero } from 'src/app/types';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('pageAnimations',[
      transition(':enter',[
        query('.user-center',[
          style({opacity:0,transform:'translateY(-100px)'}),
          stagger(300,[
            animate('500ms cubic-bezier(0.35,0,0.25,1)',style({opacity:1,transform:'none'}))
          ])
        ])
      ])
    ])
  ]
})
export class UserCenterComponent implements OnInit {
  user$:Observable<Hero | null>;

  constructor(private userServe:UserService) {
    this.user$ = this.userServe.user$;
  }

  @HostBinding('@pageAnimations')
  public animatePage = true;
  ngOnInit(): void {
  }

}
