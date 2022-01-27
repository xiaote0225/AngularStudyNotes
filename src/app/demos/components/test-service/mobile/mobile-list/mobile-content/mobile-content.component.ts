import { Component, Inject, OnInit, Optional } from '@angular/core';
import { Mobile2Service } from '../../mobile2.service';
import { listToken } from '../mobile-list.component';

@Component({
  selector: 'app-mobile-content',
  template: `
    <p>
      mobile-content works!
    </p>
  `,
  styles: [
  ]
})
export class MobileContentComponent implements OnInit {

  constructor(@Inject(listToken) readonly listVal: string) { }

  ngOnInit(): void {
    console.log('MobileContentComponent listVal',this.listVal);
  }

}
