import { Component, OnInit, platformCore, ViewEncapsulation } from '@angular/core';
import { combineLatest, concat, EMPTY, empty, forkJoin, from, fromEvent, iif, interval, merge, Observable, of, partition, race, range, Subject, Subscriber, throwError, timer, zip } from 'rxjs';
import { throttleTime, scan, map, reduce, tap, take, mapTo, combineAll, concatAll, mergeAll, startWith, endWith, pluck, withLatestFrom, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, exhaust, exhaustMap, mergeMap, mergeMapTo, mergeScan, pairwise, groupBy, toArray, switchMap, switchMapTo, audit, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, ignoreElements, filter, first, last, sample, sampleTime, single, skip, skipLast, skipUntil, skipWhile, takeLast, takeUntil, takeWhile, throttle, catchError, retry, retryWhen, delay, delayWhen, timeInterval, timestamp, timeout, timeoutWith, count, max, min, defaultIfEmpty, isEmpty, findIndex, find, every } from 'rxjs/operators';
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

function selfMap(source: Observable<string>, callBack: (item: string) => string) {
  return new Observable(observer => {
    return source.subscribe(
      value => {
        try {
          observer.next(callBack(value));
        } catch (e) {
          observer.error(e);
        }
      },
      (err) => { observer.error(err) },
      () => { observer.complete() }
    );
  })
}

interface Person {
  age: number,
  name: string
}


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // providers:[{provide:listToken,useValue:'8888'}]
})
export class ExampleComponent implements OnInit {

  showFlag = true;

  constructor() { }
  ngOnInit(): void {
    // 单播
    // const source$ = range(5);
    // source$.subscribe(val => console.log('A: ' + val));
    // source$.subscribe(val => console.log('B: ' + val));

    // 多播
    // const source$ = range(5);
    // const subject$ = new Subject();
    // subject$.subscribe(val => console.log('A: ' + val));
    // subject$.subscribe(val => console.log('B: ' + val));
    // source$.subscribe(subject$);

    // const subject = new Subject<number>();
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });
    // subject.next(1);
    // subject.next(2);

    const observable = from([1,2,3]);
    const subject = new Subject<number>();
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
    observable.subscribe(subject);

  }


}
