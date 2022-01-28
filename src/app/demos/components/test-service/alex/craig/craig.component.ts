import { Component, OnInit } from '@angular/core';
import { Parent } from '../alex.component';

@Component({
  selector: 'app-craig',
  template: `
    <div>
      <h3>craig works!</h3>
      父组件Alex：{{alex ? '已找到' + alex.name : '没找到'}}
    </div>
  `,
  styles: [
  ]
})
export class CraigComponent implements OnInit {

  constructor(readonly alex:Parent) { }

  ngOnInit(): void {
  }

}
