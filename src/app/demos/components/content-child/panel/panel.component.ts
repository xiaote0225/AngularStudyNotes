import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(readonly el:ElementRef) { }

  ngOnInit(): void {
  }

}
