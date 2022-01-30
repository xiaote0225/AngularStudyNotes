import { Component, OnInit, platformCore, ViewEncapsulation } from '@angular/core';
import { combineLatest, concat, empty, forkJoin, from, fromEvent, iif, interval, merge, Observable, of, partition, race, range, Subscriber, throwError, timer, zip } from 'rxjs';
import {throttleTime,scan, map, reduce, tap, take, mapTo, combineAll, concatAll, mergeAll, startWith, endWith, pluck, withLatestFrom, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, exhaust, exhaustMap, mergeMap, mergeMapTo, mergeScan, pairwise, groupBy, toArray, switchMap, switchMapTo, audit, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, ignoreElements, filter, first, last, sample, sampleTime, single, skip, skipLast, skipUntil, skipWhile, takeLast, takeUntil, takeWhile, throttle} from 'rxjs/operators';
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

interface Person{
  age:number,
  name:string
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

    // of
    // 按顺序发出任意类型和数量的值
    // const source = of(1,2,3,4,5);
    // source.subscribe(val => console.log('of ',val));

    // const source = of({name:'Brian'},[1,2,3],function hello(){
    //   return 'Hello';
    // });
    // const subscribe = source.subscribe(val => console.log('of',val));

    // from
    // 将数组、promise或迭代器转换成observable
    //转数组
    // const arraySource = from([1,2,3,4,5]);
    // const subscribe = arraySource.subscribe(val => console.log('from ',val));
    //转Promise
    // const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    // const subscribe = promiseSource.subscribe(val => console.log('from ',val));
    //转Map对象
    // const map = new Map([[1,'hi']]);
    // map.set(2,'Bye');
    // map.set(3,'rxjs');
    // const mapSource = from(map);
    // const subscribe = mapSource.subscribe(val => console.log(val));
    //转字符串
    // const source = from('Hello World');
    // source.subscribe(val => console.log(val));

    //empty
    // const result = empty();
    // result.subscribe(
    //   res => console.log(res),
    //   error => {},
    //   () => console.log('ok')
    // );

    //fromEvent
    // const source = fromEvent(document,'click');
    // const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    // example.subscribe(val => console.log('fromEvent',val));

    //interval
    // const source = interval(1000);
    // const subscribe = source.subscribe(val => console.log('interval ',val));

    //timer
    // const source = timer(1000);
    // const subscribe = source.subscribe(val => console.log('timer ',val));

    // const source = timer(1000,2000);
    // const subscribe = source.subscribe(val => console.log('timer ',val));

    //range
    // const numbers = range(2,5);
    // numbers.subscribe(res => console.log('range ',res));

    // const numbers = range(4);
    // numbers.subscribe(res => console.log('range ',res));

    //iif
    // const random = Math.random();
    // console.log('random',random);
    // const firstOrSecond$ = iif(
    //   () => random > 0.5,
    //   of('first'),
    //   of('second')
    // );
    // firstOrSecond$.subscribe(res => {
    //   console.log('res',res);
    // });

    // throwError
    // const err$ = throwError(new Error('fail'));
    // err$.subscribe(
    //   res => {
    //     console.log('res ',res);
    //   },
    //   error => {
    //     console.error(error);
    //   },
    //   () => console.log('complete')
    // );

    // combineLatest
    //合并多个Observable,并且返回每个Observable的最新值
    //必须要每个Observable都有发出值，combineLatest才能被订阅
    // const firstTimer = timer(0,1000);
    // const secondTimer = timer(500,1000);
    // const res$ = combineLatest(firstTimer,secondTimer);
    // res$.subscribe(res => {
    //   console.log('res',res);
    // });

    //concat
    //类似数组的concat,将每个Observable拼接起来，按顺序发出值
    // const timer$ = interval(1000).pipe(take(4));
    // const sequence$ = range(1,10);
    // const result = concat(timer$,sequence$);
    // result.subscribe(x => console.log(x));

    //forkJoin
    //类似Promise.all,等每个Observables都完成后，合并它们发出的最后一个值
    // const observable = forkJoin([
    //   of(1,2,3,4),
    //   Promise.resolve(8),
    //   timer(4000)
    // ]);
    // observable.subscribe({
    //   next:value => console.log(value),
    //   complete:() => console.log('This is how it ends!')
    // });

    //merge
    //将多个Observable合并，与concat的行为不同，merge是把值按发射的顺序，逐个进行融合
    // const clicks$ = fromEvent(document,'click');
    // const timer$ = interval(1000);
    // const clicksOrTimer$ = merge(clicks$,timer$);
    // clicksOrTimer$.subscribe(res => console.log(res));

    // const timer1 = interval(1000).pipe(take(10),mapTo('a'));
    // const timer2 = interval(2000).pipe(take(6),mapTo('b'));
    // const timer3 = interval(3000).pipe(take(10),mapTo('c'));
    // const merged$ = merge(timer1,timer2,timer3,2);
    // merged$.subscribe(x => console.log(x));

    //partition
    //将一个Observable按条件分成两个
    // const observableValues = of(1,2,3,4,5,6);
    // const [evens$,odds$] = partition(observableValues,(value,index) => value % 2 === 0);
    // odds$.subscribe(x => console.log('odd ',x));
    // evens$.subscribe(x => console.log('evens ',x));

    //race
    // const obs1 = interval(1000).pipe(mapTo('fast one'));
    // const obs2 = interval(3000).pipe(mapTo('medium one'));
    // const obs3 = interval(5000).pipe(mapTo('slow one'));

    // race(obs1,obs2,obs3).subscribe(winner => console.log('res',winner));

    //zip
    // const age$ = of<number>(27,25,29);
    // const name$ = of<string>('Foo','Bar',"Beer");
    // const isDev$ = of<boolean>(true,true,false);
    // zip(age$,name$,isDev$).subscribe(x => console.log(x));

    //combineAll
    // const clicks = fromEvent(document,'click');
    // const higherOrder = clicks.pipe(
    //   map(ev => interval(2000).pipe(take(3))),
    //   take(3)
    // );
    // const result = higherOrder.pipe(combineAll());
    // result.subscribe(x => console.log(x));

    //concatAll
    // const clicks = fromEvent(document,'click');
    // const higherOrder = clicks.pipe(
    //   map(ev => interval(1000).pipe(take(4)))
    // );
    // const firstOrder = higherOrder.pipe(concatAll());
    // firstOrder.subscribe(x => console.log(x));

    //mergeAll
    // const clicks = fromEvent(document,'click');
    // const higherOrder = clicks.pipe(map((ev) => interval(1000)));
    // const firstOrder = higherOrder.pipe(mergeAll());
    // firstOrder.subscribe(x => console.log(x));

    //startWith和endWith
    // of('from source').pipe(startWith('first','second'),endWith('end')).subscribe(
    //   x => console.log(x)
    // );

    //withLatestFrom
    // const clicks = fromEvent(document,'click').pipe(pluck('clientX'));
    // const interval$ = interval(1000);
    // // const result = clicks.pipe(withLatestFrom(interval$));
    // const result = interval$.pipe(withLatestFrom(clicks));
    // result.subscribe(x => console.log(x));

    //buffer
    //用数组收集一个流发出的值，直到另一个流发出值，就把当前已收集到的值发出并释放
    // const clicks = fromEvent(document,'click');
    // const intervalEvents = interval(1000);
    // const buffered = intervalEvents.pipe(buffer(clicks));
    // buffered.subscribe(x => console.log('x',x));

    //bufferCount
    // const clicks = fromEvent(document,'click');
    // const buffered = clicks.pipe(bufferCount(3));
    // buffered.subscribe(x => console.log(x));
    // const clicks = fromEvent(document,'click').pipe(pluck('clientX'));
    // const buffered = clicks.pipe(bufferCount(3,3));
    // buffered.subscribe(x => console.log(x));

    //bufferTime
    // const clicks = fromEvent(document,'click');
    // const buffered = clicks.pipe(bufferTime(1000));
    // buffered.subscribe(x => console.log('x',x));

    //bufferToggle
    // const sourceInterval = interval(1000);
    // const startInterval = interval(5000);
    // const closingInterval = (val:any) => {
    //   console.log(`${val} 开始缓冲!3秒后关闭`);
    //   return interval(3000);
    // }
    // const bufferToggleInterval = sourceInterval.pipe(
    //   bufferToggle(
    //     startInterval,
    //     closingInterval
    //   )
    // );
    // const subscribe = bufferToggleInterval.subscribe(val => {
    //   console.log('Emitted Buffer:',val);
    // });

    //bufferWhen
    // const oneSecondInterval = interval(1000);
    // const clicks  = fromEvent(document,'click');
    // const bufferWhenExample = oneSecondInterval.pipe(bufferWhen(() => clicks));
    // const subscribe = bufferWhenExample.subscribe(val => {
    //   console.log('Emitted Buffer: ',val);
    // });

    //concatMap
    // const source = of(10,100);
    // const example = source.pipe(concatMap(val => of(val * 2)));
    // const subscribe = example.subscribe(val => {
    //   console.log('Example Promise:',val);
    // });

    //concatMapTo
    // const source = of(10,100);
    // const example = source.pipe(map(() => 'abc'));
    // const subscribe = example.subscribe(val => {
    //   console.log('xxx',val);
    // });

    //exhaust
    // const clicks = fromEvent(document,'click');
    // const higherOrder = clicks.pipe(
    //   map((ev) => interval(1000).pipe(take(5)))
    // );
    // const result = higherOrder.pipe(exhaust());
    // result.subscribe(x => console.log('x',x));

    //exhaustMap
    // const clicks = fromEvent(document,'click');
    // const higherOrder = clicks.pipe(
    //   exhaustMap(ev => interval(1000).pipe(take(5)))
    // );
    // higherOrder.subscribe(x => console.log(x));

    //mergeMap
    // const source = of('Hello');
    // const myPromise = (val:any) => new Promise(resolve => resolve(`${val} World From Promise!`));
    // const example = source.pipe(mergeMap(val => myPromise(val)));
    // const subscribe = example.subscribe(val => console.log(val));

    //mergeMapTo
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(mergeMapTo(interval(1000)));
    // result.subscribe(x => console.log(x));

    //scan
    // const click$ = fromEvent(document,'click').pipe(mapTo(1));
    // const count$ = click$.pipe(
    //   scan((acc,one) => acc + one,0)
    // );
    // count$.subscribe(x => console.log(x));

    //mergeScan
    // const click$ = fromEvent(document,'click').pipe(mapTo(1));
    // const count$ = click$.pipe(
    //   mergeScan((acc,one) => of(acc + one),0)
    // );
    // count$.subscribe(x => console.log(x));

    //reduce
    // const source = of(1,2,3,4);
    // const example = source.pipe(reduce((acc,val) => acc + val,0));
    // const subscribe = example.subscribe(val => console.log('Sum:',val));

    //pairwise
    // const pairs = interval(1000).pipe(pairwise());
    // pairs.subscribe(x => console.log(x));

    //groupBy
    // of(
    //   {id:1,name:'JavaScrip'},
    //   {id:2,name:'Parcel'},
    //   {id:1,name:'webpack'},
    //   {id:2,name:'TypeScript'},
    //   {id:3,name:'TSLint'}
    // ).pipe(
    //   groupBy(p => p.id),
    //   mergeMap(group => group.pipe(toArray()))
    // ).subscribe(p => console.log(p));

    //pluck
    // const clicks = fromEvent(document,'click');
    // const tagNames = clicks.pipe(pluck('target','tagName'));
    // tagNames.subscribe(x => console.log(x));

    //switchMap
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(switchMap((ev) => interval(1000)));
    // result.subscribe(x => console.log(x));

    //switchMapTo
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(switchMapTo(interval(1000)));
    // result.subscribe(x => console.log(x));

    //map
    // const source = from([1,2,3,4,5,6]);
    // const example = source.pipe(map(val => val + 10));
    // const subscribe = example.subscribe(val => console.log(val));

    //mapTo
    // const source = interval(2000);
    // const example = source.pipe(mapTo('Hello World!'));
    // const subscribe = example.subscribe(val => console.log(val));

    //audit
    // const clicks = fromEvent(document,'click').pipe(pluck('clientX'));
    // const result = clicks.pipe(audit(ev => interval(2000)));
    // result.subscribe(x => console.log('x',x));

    //auditTime
    // const clicks = fromEvent(document,'click').pipe(pluck('clientX'));
    // const result = clicks.pipe(auditTime(2000));
    // result.subscribe(x => console.log('x',x));

    //debounce
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(pluck('clientX'),debounce(() => interval(1000)));
    // result.subscribe(x => console.log(x));

    //debounceTime
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe(x => console.log(x));

    //distinct
    // of(1,1,2,2,2,1,2,3,4,3,2,1).pipe(distinct()).subscribe(
    //   x => console.log(x)
    // );
    // of<Person>(
    //   {age:4,name:'Foo'},
    //   {age:7,name:'Bar'},
    //   {age:5,name:'Foo'}
    // ).pipe(
    //   distinct((p:Person) => p.name)
    // ).subscribe(
    //   x => console.log(x)
    // );

    // of(1,1,2,2,2,1,1,2,3,3,4,4).pipe(distinctUntilChanged()).subscribe(
    //   x => console.log(x)
    // );

    // of<Person>(
    //   {age:4,name:'Foo'},
    //   {age:7,name:'Bar'},
    //   {age:5,name:'Foo'},
    //   {age:6,name:'Foo'}
    // ).pipe(
    //   distinctUntilChanged((p:Person,q:Person) => p.name === q.name)
    // ).subscribe(
    //   x => console.log(x)
    // );

    // of<Person>(
    //   {age:4,name:'Foo'},
    //   {age:7,name:'Bar'},
    //   {age:5,name:'Foo'},
    //   {age:6,name:'Foo'}
    // ).pipe(
    //   distinctUntilKeyChanged('name')
    // ).subscribe(
    //   x => console.log(x)
    // )

    // of<Person>(
    //   {age:4,name:'Foo1'},
    //   {age:7,name:'Bar'},
    //   {age:5,name:'Foo2'},
    //   {age:5,name:'F1o2'},
    //   {age:6,name:'Foo3'}
    // ).pipe(
    //   distinctUntilKeyChanged('name',(x:string,y:string) => x.substring(0,3) === y.substring(0,3))
    // ).subscribe(
    //   x => console.log(x)
    // );

    //elementAt
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(elementAt(2));
    // result.subscribe(x => console.log(x));

    //ignoreElements
    // of('you','talking','to','me').pipe(ignoreElements()).subscribe(
    //   word => console.log(word),
    //   err => console.log('error:',err),
    //   () => console.log('the end')
    // );

    //filter
    // const clicks = fromEvent(document,'click');
    // const clicksOnDivs = clicks.pipe(tap(ev => console.log('ev',ev)),filter(ev => (ev.target as HTMLElement).tagName === 'DIV'));
    // clicksOnDivs.subscribe(x => console.log(x));

    //first
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(first());
    // result.subscribe(x => console.log(x));

    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(first(ev => (ev.target as HTMLElement).tagName === 'DIV'));
    // result.subscribe(x => console.log(x));

    //last
    // of('you','talking','to','me').pipe(last()).subscribe(
    //   res => console.log(res)
    // );

    //sample
    // const seconds = interval(1000);
    // const clicks = fromEvent(document,'click');
    // const result = seconds.pipe(sample(clicks));
    // result.subscribe(x => console.log(x));

    //sampleTime
    // const clicks = fromEvent(document,'click');
    // const result = clicks.pipe(sampleTime(3000));
    // result.subscribe(x => console.log(x));

    //single
    // const numbers = range(1,5).pipe(single());
    // numbers.subscribe(x => console.log('never get called'),e => console.log('error'));

    // const numbers = range(1).pipe(single());
    // numbers.subscribe(x => console.log('get result',x),e => console.log('error'));

    // const numbers = range(1,5).pipe(single(item => item === 3));
    // numbers.subscribe(x => console.log('get result',x),e => console.log('error'));

    // const number2 = range(1,5).pipe(single(item => item > 3));
    // number2.subscribe(x => console.log('get result',x),e => console.log('error'));

    //skip
    // const source = interval(1000);
    // const example = source.pipe(skip(5));
    // const subscribe = example.subscribe(x => console.log(x));

    //skipLat
    // const many = range(1,5);
    // const skipLastTwo = many.pipe(skipLast(2));
    // skipLastTwo.subscribe(x => console.log(x));

    //skipUntil
    // const intervalObservable = interval(1000);
    // const click = fromEvent(document,'click');
    // const emitAfterClick = intervalObservable.pipe(skipUntil(click));
    // const subscribe = emitAfterClick.subscribe(value => console.log(value));

    //skipWhile
    // const source = interval(1000);
    // const example = source.pipe(skipWhile(val => val < 5));
    // const subscribe = example.subscribe(x => console.log(x));

    //take
    // const intervalCount = interval(1000);
    // const takFive = intervalCount.pipe(take(5));
    // takFive.subscribe(x => console.log(x));

    //takeLast
    // const many = range(1,100);
    // const lastThree = many.pipe(takeLast(3));
    // lastThree.subscribe(x => console.log(x));

    //takeUntil
    // const source = interval(1000);
    // const clicks = fromEvent(document,'click');
    // const result = source.pipe(takeUntil(clicks));
    // result.subscribe(x => console.log(x));

    //takeWhile
    // const source = range(1,8);
    // const example = source.pipe(takeWhile(val => val < 4));
    // const subscribe = example.subscribe(x => console.log(x));

    //throttle
    // const interval$ = interval(500);
    // const result = interval$.pipe(throttle(ev => interval(2000),{leading:true,trailing:false}));
    // result.subscribe(x => console.log(x));

    //throttleTime
    const interval$ = interval(500);
    const result = interval$.pipe(throttleTime(2000));
    result.subscribe(x => console.log(x));
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
    // const p = new Promise(resolve => {
    //   console.log('initial a promise');
    //   resolve(['a','b','c'])
    // }).then(res => {
    //   console.log('第1个then',res);
    //   return res;
    // }).then(res => {
    //   console.log('第2个then',res);
    //   return res;
    // }
    // );
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
