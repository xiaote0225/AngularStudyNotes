import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-manage-crises',
  templateUrl: './manage-crises.component.html',
  styleUrls: ['./manage-crises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageCrisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
