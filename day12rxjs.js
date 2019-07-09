// var arr = [1, 2, 3, 4];
// var result = arr.reduce((origin, next) => {
//     console.log(origin);
//     return origin + next;
// }, 0);
// console.log(result);

// import { from, interval } from "rxjs";
// import { zip, scan } from "rxjs/operators";

// var source$ = from("hello").pipe(
//     zip(interval(600), (x, y) => x)
// );
// var example$ = source$.pipe(
//     scan((origin, next) => origin + next, '')
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log("complete"); }
// });

// import { interval } from "rxjs";
// import { buffer } from "rxjs/operators";

// var source$ = interval(300);
// var source2$ = interval(1000);
// var example$ = source$.pipe(
//     buffer(source2$)
// );
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });


// import { interval } from "rxjs";
// import { buffer, bufferTime } from "rxjs/operators";

// var source$ = interval(300);
// var example$ = source$.pipe(
//     bufferTime(1000)
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });


import { interval } from "rxjs";
import { bufferCount } from "rxjs/operators";

var source$ = interval(300);
var example$ = source$.pipe(
    bufferCount(3)
);
example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
