import { Component, Inject, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { listToken } from '../mobile-list/mobile-list.component';
import { Mobile, MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile-item',
  template: `
    <div class="mobile-item">
      <h4>这里是 mobile item</h4>
      current mobild: {{ mobile?.name }}
      <h4>这里是listToken</h4>
      listToken:{{listVal}}
    </div>
  `,
  styles: [
  ],
  providers:[{provide:listToken,useValue:'app-mobile-item'}]
})
export class MobileItemComponent implements OnInit {

  mobile: Mobile|undefined;
  constructor(@Self() @Inject(listToken) readonly listVal: string,private mobileServe:MobileService) {
    this.mobile = this.mobileServe.getMobile('m2');
    // console.log('view item', this.listVal);
  }

  ngOnInit(): void {
  }

}
