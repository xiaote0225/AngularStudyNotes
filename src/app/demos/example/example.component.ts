import { Component, OnInit, platformCore, ViewEncapsulation } from '@angular/core';
import { AsyncSubject, BehaviorSubject, combineLatest, concat, ConnectableObservable, EMPTY, empty, forkJoin, from, fromEvent, iif, interval, merge, Observable, of, partition, race, range, ReplaySubject, Subject, Subscriber, Subscription, throwError, timer, zip } from 'rxjs';
import { throttleTime, scan, map, reduce, tap, take, mapTo, combineAll, concatAll, mergeAll, startWith, endWith, pluck, withLatestFrom, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, exhaust, exhaustMap, mergeMap, mergeMapTo, mergeScan, pairwise, groupBy, toArray, switchMap, switchMapTo, audit, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, ignoreElements, filter, first, last, sample, sampleTime, single, skip, skipLast, skipUntil, skipWhile, takeLast, takeUntil, takeWhile, throttle, catchError, retry, retryWhen, delay, delayWhen, timeInterval, timestamp, timeout, timeoutWith, count, max, min, defaultIfEmpty, isEmpty, findIndex, find, every, share, multicast, refCount, publishBehavior, shareReplay } from 'rxjs/operators';
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
    // multicast
    // const source = from([1,2,3]);
    // const subject = new Subject();
    // const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<number>;

    // multicasted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // multicasted.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });
    // multicasted.connect();

    // const source = interval(1000);
    // const subject = new Subject();
    // const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<number>;
    // let subscription1: Subscription, subscription2:Subscription, subscriptionConnect:Subscription;

    // subscription1 = multicasted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });

    // subscriptionConnect = multicasted.connect();

    // setTimeout(() => {
    //   subscription2 = multicasted.subscribe({
    //     next: (v) => console.log(`observerB: ${v}`)
    //   });
    // }, 1000);

    // setTimeout(() => {
    //   subscription1.unsubscribe();
    //   subscriptionConnect.unsubscribe();
    // }, 2000);

    // setTimeout(() => {
    //   subscription2.unsubscribe();

    // },7000);

    //refCount


    // const source = interval(1000);
    // const subject = new Subject();
    // const refCounted = source.pipe(multicast(subject),refCount());
    // let subscription1:Subscription,subscription2:Subscription;

    // console.log('observerA subscribed');
    // subscription1 = refCounted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });

    // setTimeout(() => {
    //   console.log('observerB subscribed');
    //   subscription2 = refCounted.subscribe({
    //     next: (v) => console.log(`observerB: ${v}`)
    //   });
    // },1000);


    // setTimeout(() => {
    //   console.log('observerA unsubscribed');
    //   subscription1.unsubscribe();
    // },2000);

    // setTimeout(() => {
    //   console.log('obsesrverB unsubscribed');
    //   subscription2.unsubscribe();
    // },5000)


    // publish
    // const source = range(1,5);
    // const refCounted:Observable<number> = source.pipe(publishBehavior(0),refCount());

    // console.log('observerA subscribed');
    // refCounted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });


    // setTimeout(() => {
    //   console.log('observerB subscribed');
    //   refCounted.subscribe({
    //     next: (v) => console.log(`observerB: ${v}`)
    //   });
    // },2000);

    //share
    // const source = interval(1000);
    // const refCounted = source.pipe(share());

    // console.log('observerA subscribed');
    // refCounted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });

    // setTimeout(() => {
    //   console.log('observerB subscribed');
    //   refCounted.subscribe({
    //     next: (v) => console.log(`observerB: ${v}`)
    //   });
    // }, 2000);

    //shareReplay
    const source = range(2,8);
    const refCounted = source.pipe(share());

    console.log('observerA subscribed');
    refCounted.subscribe({
      next: (v) => console.log(`observerA ${v}`)
    });

    setTimeout(() => {
      console.log('observerB subscribed');
      refCounted.subscribe({
        next: (v) => console.log(`observerB: ${v}`)
      });
    }, 2000);

  }


}
