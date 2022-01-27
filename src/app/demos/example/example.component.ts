import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { listToken } from '../components/test-service/mobile/mobile-list/mobile-list.component';
import { Mobile2Service } from '../components/test-service/mobile/mobile2.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  encapsulation:ViewEncapsulation.None,
  // providers:[{provide:listToken,useValue:'8888'}]
})
export class ExampleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
