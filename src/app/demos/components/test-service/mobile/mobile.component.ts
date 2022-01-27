import { Component, OnInit } from '@angular/core';
import { listToken } from './mobile-list/mobile-list.component';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-mobile',
  template: `
    <div class="mobile">
      <h2>这里是Mobile</h2>
      <section>
        <app-mobile-list>
          <app-mobile-content></app-mobile-content>
        </app-mobile-list>
      </section>
    </div>
  `,
  styles: [
  ],
  providers:[MobileService,{ provide: listToken, useValue: 'app-mobile' }]
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
