// import { interval, Subject } from "rxjs";
// import { take } from "rxjs/operators";

// var source$ = interval(1000).pipe(take(3));

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
// var subject$ = new Subject();

// subject$.subscribe(observerA);

// source$.subscribe(subject$);

// setTimeout(() => {
//     subject$.subscribe(observerB);
// }, 1000);

// import { interval, Subject } from "rxjs";
// import { take, multicast } from "rxjs/operators";

// var source$ = interval(1000).pipe(
//     take(3),
//     multicast(() => new Subject())
// );

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

// source$.subscribe(observerA);
// source$.connect();

// setTimeout(() => {
//     source$.subscribe(observerB)
// }, 1000);

// import { interval, Subject } from "rxjs";
// import { tap, multicast } from "rxjs/operators";

// var source$ = interval(1000).pipe(
//     tap(x => console.log("send: " + x)),
//     multicast(() => new Subject())// 無限的 observable 
// );

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

// var subscriptionA = source$.subscribe(observerA);
// var realSubscription = source$.connect();
// var subscriptionB;
// setTimeout(() => {
//     subscriptionB = source$.subscribe(observerB);
// }, 1000);

// setTimeout(() => {
//     subscriptionA.unsubscribe();
//     subscriptionB.unsubscribe();
//     // 這裡雖然 A 跟 B 都退訂了，但 source 還會繼續送元素
// }, 5000);

// setTimeout(() => {
//     realSubscription.unsubscribe();
//     // 這裡 source 才會真正停止送元素
// }, 7000);

// import { interval, Subject } from "rxjs";
// import { tap, multicast, refCount } from "rxjs/operators";
// var source$ = interval(1000).pipe(
//     tap(x => console.log("send: " + x)),
//     multicast(() => new Subject()),
//     refCount()
// );

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

// var subscriptionA = source$.subscribe(observerA);
// //訂閱數 0 => 1

// var subscriptionB;
// setTimeout(() => {
//     subscriptionB = source$.subscribe(observerB);
//     // 訂閱數 0 => 2
// }, 1000);

// import { interval, Subject } from "rxjs";
// import { tap, multicast, refCount } from "rxjs/operators";
// var source$ = interval(1000).pipe(
//     tap(x => console.log("send: " + x)),
//     multicast(() => new Subject()),
//     refCount()
// );

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

// var subscriptionA = source$.subscribe(observerA);
// //訂閱數 0 => 1

// var subscriptionB;
// setTimeout(() => {
//     subscriptionB = source$.subscribe(observerB);
//     // 訂閱數 0 => 2
// }, 1000);

// setTimeout(() => {
//     subscriptionA.unsubscribe();// 訂閱數 2 => 1
//     subscriptionB.unsubscribe();// 訂閱數 1 => 0，source 停止發送元素
// }, 5000);

// import { interval, Subject } from "rxjs";
// import { tap, multicast, publish, refCount } from "rxjs/operators";

// var source$ = interval(1000).pipe(
//     publish(),
//     refCount()
// );

// // var source$ = interval(1000).pipe(
// //     multicast(() => new Subject()),
// //     refCount()
// // );

// import { interval, Subject } from "rxjs";
// import { tap, multicast, publish, publishReplay, refCount } from "rxjs/operators";

// var source$ = interval(1000).pipe(
//     publishReplay(1),
//     refCount()
// );

// // var source$ = interval(1000).pipe(
// //     multicast(() => new publishReplay(1)),
// //     refCount()
// // );


// 


// import { interval, Subject } from "rxjs";
// import { tap, multicast, publish, publishReplay, publishBehavior, publishLast, refCount } from "rxjs/operators";

// var source$ = interval(1000).pipe(
//     publishLast(),
//     refCount()
// );

// // var source$ = interval(1000).pipe(
// //     multicast(() => new publishLast()),
// //     refCount()
// // );


import { interval, Subject } from "rxjs";
import { tap, multicast, publish, publishReplay, publishBehavior, publishLast, refCount, share } from "rxjs/operators";

var source$ = interval(1000).pipe(
    share()
);

// var source$ = interval(1000).pipe(
//     publish(),
//     refCount()
// );

// var source$ = interval(1000).pipe(
//     multicast(() => new Subject()),
//     refCount()
// );

