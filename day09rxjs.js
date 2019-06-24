// import { interval, from } from "rxjs";
// import { skip } from "rxjs/operators";

// var source$ = interval(1000);
// var example$ = source$.pipe(
//     skip(3)
// );
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

// import { interval, from } from "rxjs";
// import { take, takeLast } from "rxjs/operators";
// var source$ = interval(1000).pipe(
//     take(6));
// var example$ = source$.pipe(
//     takeLast(2));

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

// import { interval, from } from "rxjs";
// import { last, take } from "rxjs/operators";

// let source$ = interval(1000).pipe(
//     take(6));
// let example$ = source$.pipe(
//     last());
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

// import { interval, of } from "rxjs";
// import { concat, take } from "rxjs/operators";

// let source$ = interval(1000).pipe(take(3));
// let source2$ = of(3);
// let source3$ = of(4, 5, 6);
// var example$ = source$.pipe(concat(source2$, source3$));
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

// import { interval, of } from "rxjs";
// import { startWith } from "rxjs/operators";
// let source$ = interval(1000);
// let example$ = source$.pipe(startWith(0));
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('error: ' + err) },
//     complete: () => { console.log('complete'); }
// });

import { interval } from "rxjs";
import { take, merge } from "rxjs/operators";
let source$ = interval(500).pipe(take(3));
let source2$ = interval(300).pipe(take(6));
let example$ = source$.pipe(merge(source2$));

example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('error: ' + err) },
    complete: () => { console.log('complete'); }
});