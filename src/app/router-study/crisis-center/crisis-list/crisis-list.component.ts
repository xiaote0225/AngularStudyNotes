import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
