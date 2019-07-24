// import { interval, Subject } from "rxjs";

// var subject$ = new Subject();

// var observerA = {
//     next: value => console.log("A next: " + value),
//     error: error => console.log("A error:" + error),
//     complete: () => console.log("A complete")
// };

// var observerB = {
//     next: value => console.log("B next: " + value),
//     error: error => console.log("B error:" + error),
//     complete: () => console.log("B complete")
// };

// subject$.subscribe(observerA);
// subject$.subscribe(observerB);

// subject$.next(1);

// subject$.next(2);

// import { interval, Subject } from "rxjs";

// var subject$ = new Subject();

// var observerA = {
//     next: value => console.log("A next: " + value),
//     error: error => console.log("A error:" + error),
//     complete: () => console.log("A complete")
// };

// var observerB = {
//     next: value => console.log("B next: " + value),
//     error: error => console.log("B error:" + error),
//     complete: () => console.log("B complete")
// };

// subject$.subscribe(observerA);

// subject$.next(1);

// subject$.next(2);

// subject$.next(3);

// setTimeout(() => {
//     subject$.subscribe(observerB);// 3 秒後才訂閱，observerB 不會收到任何值。
// }, 3000);

// import { BehaviorSubject } from "rxjs";

// var subject$ = new BehaviorSubject(0);// 0 為起始值
// var observerA = {
//     next: value => console.log("A next: " + value),
//     error: error => console.log("A error:" + error),
//     complete: () => console.log("A complete")
// };

// var observerB = {
//     next: value => console.log("B next: " + value),
//     error: error => console.log("B error:" + error),
//     complete: () => console.log("B complete")
// };

// subject$.subscribe(observerA);

// subject$.next(1);


// subject$.next(2);

// subject$.next(3);

// setTimeout(() => {
//     subject$.subscribe(observerB);

// }, 3000);

// import { ReplaySubject } from "rxjs";
// var subject$ = new ReplaySubject(2);//重複發送最後2個元素
// var observerA = {
//     next: value => console.log("A next: " + value),
//     error: error => console.log("A error:" + error),
//     complete: () => console.log("A complete")
// };

// var observerB = {
//     next: value => console.log("B next: " + value),
//     error: error => console.log("B error:" + error),
//     complete: () => console.log("B complete")
// };

// subject$.subscribe(observerA);
// subject$.next(1);

// subject$.next(2);

// subject$.next(3);

// setTimeout(() => {
//     subject$.subscribe(observerB);

// }, 3000);

import { AsyncSubject } from "rxjs";
var subject$ = new AsyncSubject();
var observerA = {
    next: value => console.log("A next: " + value),
    error: error => console.log("A error:" + error),
    complete: () => console.log("A complete")
};

var observerB = {
    next: value => console.log("B next: " + value),
    error: error => console.log("B error:" + error),
    complete: () => console.log("B complete")
};

subject$.subscribe(observerA);
subject$.next(1);
subject$.next(2);
subject$.next(3);
subject$.complete();

setTimeout(() => {
    subject$.subscribe(observerB);


}, 3000);



