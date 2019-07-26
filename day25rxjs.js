// import { interval, Subject } from "rxjs";
// import { map } from "rxjs/operators";

// const source$ = interval(1000);
// const subject$ = new Subject();
// const example$ = subject$.pipe(
//     map(x => {
//         if (x === 1) {
//             throw new Error("oops");
//         }
//         return x;
//     })
// );

// subject$.subscribe(x => console.log("A,", x));
// example$.subscribe(x => console.log("B,", x));
// subject$.subscribe(x => console.log("C,", x));

// source$.subscribe(subject$);

// import { interval, Subject } from "rxjs";
// import { map } from "rxjs/operators";

// const source$ = interval(1000);
// const subject$ = new Subject();
// const example$ = subject$.pipe(
//     map(x => {
//         if (x === 1) {
//             throw new Error("oops");
//         }
//         return x;
//     })
// );

// subject$.subscribe(
//     x => console.log("A,", x),
//     error => console.log("A Error:" + error));
// example$.subscribe(
//     x => console.log("B,", x),
//     error => console.log("B Error:" + error));
// subject$.subscribe(
//     x => console.log("C,", x),
//     error => console.log("C Error:" + error));

// source$.subscribe(subject$);

// import { interval, Subject, asapScheduler } from "rxjs";
// import { map, observeOn } from "rxjs/operators";
// const source$ = interval(1000);
// const subject$ = new Subject().pipe(
//     observeOn(asapScheduler)
// );
// const example$ = subject$.pipe(
//     map(x => {
//         if (x === 1) {
//             throw new Error("oops");
//         }
//         return x;
//     })
// );
// subject$.subscribe(x => console.log("A,", x));
// example$.subscribe(x => console.log("B,", x));
// subject$.subscribe(x => console.log("C,", x));

// source$.subscribe(subject$);

// import { interval, asapScheduler } from "rxjs";
// import { map, take } from "rxjs/operators";
// var result$ = interval(1000).pipe(
//     take(6),
//     map(x => Math.random())// side-effect，平常有可能是呼叫 API 或其他 side effect
// );

// var subA$ = result$.subscribe(x => console.log("A: " + x));
// var subB$ = result$.subscribe(x => console.log("B: " + x));

import { interval, asapScheduler, Subject } from "rxjs";
import { map, take, multicast, refCount } from "rxjs/operators";
var result$ = interval(1000).pipe(
    take(6),
    map(x => Math.random()),// side-effect
    multicast(new Subject()),
    refCount()
);

var subA$ = result$.subscribe(x => console.log("A: " + x));
var subB$ = result$.subscribe(x => console.log("B: " + x));