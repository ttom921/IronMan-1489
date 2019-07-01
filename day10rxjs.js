

// import { interval } from "rxjs";
// import { take, combineLatest } from "rxjs/operators";

// var source$ = interval(500).pipe(take(3));
// var newest$ = interval(300).pipe(take(6));

// var example$ = source$.pipe(combineLatest(newest$, (x, y) => x + y));
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

// import { interval } from "rxjs";
// import { take,zip} from "rxjs/operators";

// var source$ = interval(500).pipe(take(3));
// var newest$ = interval(300).pipe(take(6));


// var example$ = source$.pipe(zip(newest$, (x, y) => x + y));
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

// import { from, interval } from "rxjs";
// import { zip } from "rxjs/operators";
// var source$ = from('hello');
// var source2$ = interval(100);
// var example$ = source$.pipe(zip(source2$, (x, y) => x));
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

import { from, interval } from "rxjs";
import { zip, withLatestFrom } from "rxjs/operators";
var main$ = from("hello").pipe(zip(interval(500), (x, y) => x));
var some$ = from([0, 1, 0, 0, 0, 1]).pipe(zip(interval(300), (x, y) => x));

var example$ = main$.pipe(withLatestFrom(some$, (x, y) => {
    return y === 1 ? x.toUpperCase() : x;
}));

example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('error: ' + err) },
    complete: () => { console.log('complete'); }
});