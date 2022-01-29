import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, from, interval, Observable, of, Subscriber } from 'rxjs';
import {throttleTime,scan, map, reduce, tap} from 'rxjs/operators';
import { listToken } from '../components/test-service/mobile/mobile-list/mobile-list.component';
import { Mobile2Service } from '../components/test-service/mobile/mobile2.service';

// const sub = interval(1000).subscribe(res => {
//   console.log('interval=---=',res);
// });

// const observable1 = interval(2000);
// const observable2 = interval(1000);

// const subscription = observable1.subscribe(x => console.log('first: ' + x));
// const childSubscription = observable2.subscribe(x => console.log('child' + x));
// subscription.add(childSubscription);

function selfMap(source:Observable<string>,callBack:(item:string) => string){
  return new Observable(observer => {
    return source.subscribe(
      value => {
        try{
          observer.next(callBack(value));
        }catch(e){
          observer.error(e);
        }
      },
      (err) => { observer.error(err)},
      () => { observer.complete() }
    );
  })
}


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


  testSelfMap():void{
    const people$ = of('001abc','002abc');
    const hellePeople$ = selfMap(people$, (item:string) => item + ' Hello~');
    hellePeople$.subscribe(res => {
      console.log('res',res);
    });
  }

  ngOnInit(): void {
    //Observable
    //Observable负责从数据源中推送数据,类似Promise
    // const observable = new Observable(subscriber => {
    //   //推送3个数据
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    // })
    // console.log('before subscribe');
    // observable.subscribe(x => {
    //   console.log('获得 value ' + x);
    // });
    // console.log('subscribe');

    //lazy computations
    // const foo = new Observable(subscriber => {
    //   console.log('Hello');
    //   subscriber.next(42);
    // });
    // foo.subscribe(x => {
    //   console.log('x',x);
    // });

    //Observable可同步，也可异步推送值
    // const foo = new Observable(subscriber => {
    //   console.log('init Observable');
    //   subscriber.next('666');
    // });

    // console.log('before');
    // foo.subscribe(res => {
    //   console.log('res',res);
    // });
    // console.log('after');

    // const foo = new Observable(subscriber => {
    //   console.log('init Observalbe');
    //   subscriber.next('001');
    //   subscriber.next('002');
    //   subscriber.next('003');
    //   setTimeout(() => {
    //     subscriber.next('setTimeout.....');
    //   },2000)
    // });
    // console.log('before...');
    // foo.subscribe(res => {
    //   console.log('res',res);
    // });
    // console.log('after...');

    //创建Observables
    //可用new Observable创建，但实际情况更多的是用of,from,interval等操作符创建
    // const observable = new Observable(function subscribe(subscriber){
    //   const id = setInterval(() => {
    //     subscriber.next('hi')
    //   },1000);
    // });
    // observable.subscribe(res => {
    //   console.log('example res',res);
    // });

    //手动结束推送
    // const observable = new Observable(function subscribe(subscriber){
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   subscriber.complete();
    //   subscriber.next(4);
    // });
    // observable.subscribe(value => {
    //   console.log('value',value);
    // },error => {
    //   console.log('error',error);
    // },() => {
    //   console.log('complete');
    // });

    //发生错误
    // const observable = new Observable(function subscribe(subscriber){
    //   try{
    //     subscriber.next(1);
    //     subscriber.next(2);
    //   }catch(err){
    //     subscriber.error(new Error('出事了'));
    //   }
    // });
    // observable.subscribe(value => {
    //   console.log('value',value);
    // },error => {
    //   console.log('error err',error);
    // },() => {
    //   console.log('complete');
    // });

    //Observable.subscribe的完整写法
    // observable.subscribe({
    //   next(value){
    //     console.log('value',value);
    //   },
    //   error(error){
    //     console.log('error',error);
    //   },
    //   complete(){
    //     console.log('complete');
    //   }
    // });
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
    // const o = new Observable(subscriber => {
    //   console.log('initial a newObservable');
    //   subscriber.next(['a','b','c']);
    // }).pipe(
    //   map(res => {
    //     console.log('第一个map');
    //     return res;
    //   }),
    //   map(res => {
    //     console.log('第2个map');
    //     return res;
    //   })
    // );
    // o.subscribe(res => {
    //   console.log('res--------------');
    // })

  }

  cancelObservable():void{
    // subscription.unsubscribe();
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
