import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  heroName = '卡特';
  arms = '多兰剑';

  constructor() { }

  ngOnInit(): void {
  }

}
