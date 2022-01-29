import { interval } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-unsubscribe',
  templateUrl: './test-unsubscribe.component.html',
  styleUrls: ['./test-unsubscribe.component.scss']
})
export class TestUnsubscribeComponent implements OnInit,OnDestroy {
  intervalParam = interval(1000).subscribe(res => {
    console.log('TestUnsubscribeComponent interval',res);
  })
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('TestUnsubscribeComponent destroy!!!');
    this.intervalParam.unsubscribe();
  }
}
