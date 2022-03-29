import { UserService } from './../../../services/user.service';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/types';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserCenterComponent implements OnInit {
  user$:Observable<Hero | null>;

  constructor(private userServe:UserService) {
    this.user$ = this.userServe.user$;
  }

  ngOnInit(): void {
  }

}
