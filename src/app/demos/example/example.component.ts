import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import {throttleTime,scan, map} from 'rxjs/operators';
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
    //控制点击频率，每次点击至少间隔2秒
    //原生实现
    // let count = 0;
    // let rate = 1000;
    // let lastClick = Date.now();
    // document.addEventListener('click', () => {
    //   if(Date.now() - lastClick >= rate){
    //     console.log(`Clicked ${++count} times`);
    //     lastClick = Date.now();
    //   }
    // });
    //rxjs
    // fromEvent(document,'click').pipe(
    //   throttleTime(1000),
    //   scan(count => count + 1,0)
    // ).subscribe(count => console.log(`Clicked ${count} times`));
    // 累加每次点击的clientX值
    // 原生实现
    // let count = 0;
    // let rate = 1000;
    // let lastClick = Date.now();
    // document.addEventListener('click', event => {
    //   if(Date.now() - lastClick >= rate){
    //     count += event.clientX;
    //     // console.log(`Clicked ${++count} times`);
    //     console.log(count);
    //     lastClick = Date.now();
    //   }
    // });
    // rxjs
    fromEvent(document,'click').pipe(
      throttleTime(1000),
      map((event:Event) => (event as MouseEvent).clientX),
      scan((count,clientX) => count + clientX,0)
    ).subscribe(count =>
      console.log(count)
    );
  }
}
