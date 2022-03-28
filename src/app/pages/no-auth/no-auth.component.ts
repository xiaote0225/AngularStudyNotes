import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
