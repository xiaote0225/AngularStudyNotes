import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, from, interval, Observable } from 'rxjs';
import {throttleTime,scan, map, reduce, tap} from 'rxjs/operators';
import { listToken } from '../components/test-service/mobile/mobile-list/mobile-list.component';
import { Mobile2Service } from '../components/test-service/mobile/mobile2.service';

// const sub = interval(1000).subscribe(res => {
//   console.log('interval=---=',res);
// });

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  encapsulation:ViewEncapsulation.None,
  // providers:[{provide:listToken,useValue:'8888'}]
})
export class ExampleComponent implements OnInit {

  showFlag = true;

  constructor() { }

  ngOnInit(): void {
  }

  newPromise(){
    // const p = new Promise(resolve => {
    //   console.log('initial a promise');//立即触发
    // });
    // const p = new Promise(resolve => {
    //   console.log('initial a promise'); //立即触发
    //   resolve(['a','b','c']);
    // }).then(res => {
    //   console.log('第一个then',res);
    //   return res;
    // }).then(res => {
    //   console.log('第2个then',res);
    //   return res;
    // });
    const p = new Promise(resolve => {
      console.log('initial a promise');
      resolve(['a','b','c'])
    }).then(res => {
      console.log('第1个then',res);
      return res;
    }).then(res => {
      console.log('第2个then',res);
      return res;
    }
    );
  }

  newObservable(){
    // const o = new Observable(subscriber => {
    //   console.log('initial a newObservable'); //不触发
    // });
    const o = new Observable(subscriber => {
      console.log('initial a newObservable');
      subscriber.next(['a','b','c']);
    }).pipe(
      map(res => {
        console.log('第一个map');
        return res;
      }),
      map(res => {
        console.log('第2个map');
        return res;
      })
    );
    o.subscribe(res => {
      console.log('res--------------');
    })

  }

  cancelObservable():void{
    // sub.unsubscribe();
  }

  concat(){
    const arr$ = from([11,22,33]);
    const arr2$ = from([1,2,3]);
    concat(arr$,arr2$).pipe(
      reduce((s,v) => s + v,0),
      tap(item => {
        console.log('tap',item);
      })
    ).subscribe(res => {
      console.log('concat',res);
    });
  }
}
