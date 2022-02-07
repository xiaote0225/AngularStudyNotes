import { Component, OnInit, platformCore, ViewEncapsulation } from '@angular/core';
import { AsyncSubject, BehaviorSubject, combineLatest, concat, EMPTY, empty, forkJoin, from, fromEvent, iif, interval, merge, Observable, of, partition, race, range, ReplaySubject, Subject, Subscriber, throwError, timer, zip } from 'rxjs';
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
    // BehaviorSubject
    // const subject = new Subject();
    // const subject = new BehaviorSubject(0);
    // const observerA = {
    //   next: (value:any) => console.log('A next: ' + value),
    //   error: (error:any) => console.log('A error: ' + error),
    //   complete: () => console.log('A complete!')
    // };
    // const observerB = {
    //   next: (value:any) => console.log('B next: ' + value),
    //   error: (error:any) => console.log('B error: ' + error),
    //   complete: () => console.log('B complete')
    // };

    // subject.subscribe(observerA);
    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // // subject.subscribe(observerB);
    // setTimeout(() => {
    //   subject.subscribe(observerB);
    // },3000);

    // const subject = new BehaviorSubject(0);
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.next(1);
    // subject.next(2);
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });
    // subject.next(3);

    //ReplaySubject
    // const subject = new ReplaySubject(3);
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });
    // subject.next(5);

    // const subject = new ReplaySubject(3,5000);
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // range(5).subscribe(value => subject.next(value));
    // // subject.subscribe({
    // //   next:(v) => console.log(`observerC: ${v}`)
    // // });
    // setTimeout(() => {
    //   subject.subscribe({
    //     next:(v) => console.log(`observerB: ${v}`)
    //   });
    // },6000);

    //AsyncSubject
    const subject = new AsyncSubject();
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
    subject.next(5);
    subject.complete();

  }


}
