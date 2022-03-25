import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinComponent implements OnInit {
  @Input() show = false;
  constructor() { }

  ngOnInit(): void {
  }

}
