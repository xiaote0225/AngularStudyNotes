import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UpdateHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
