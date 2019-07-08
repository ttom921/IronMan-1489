// var arr = [1, 2, 3, 4];
// var result = arr.reduce((origin, next) => {
//     console.log(origin);
//     return origin + next;
// }, 0);
// console.log(result);

import { from, interval } from "rxjs";
import { zip, scan } from "rxjs/operators";

var source$ = from("hello").pipe(
    zip(interval(600), (x, y) => x)
);
var example$ = source$.pipe(
    scan((origin, next) => origin + next, '')
);

example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log("complete"); }
});