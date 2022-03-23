import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
