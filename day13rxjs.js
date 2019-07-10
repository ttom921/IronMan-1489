// import { interval } from "rxjs";
// import { take, delay } from "rxjs/operators";

// var source$ = interval(300).pipe(
//     take(5)
// );

// var example$ = source$.pipe(
//     delay(500)
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

// import { interval } from "rxjs";
// import { take, delay } from "rxjs/operators";

// var source$ = interval(300).pipe(
//     take(5)
// );

// var example$ = source$.pipe(
//     delay(new Date(new Date().getTime() + 1000))
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

import { interval, empty } from "rxjs";
import { take, delayWhen, delay } from "rxjs/operators";

var source$ = interval(300).pipe(
    take(5)
);

var example$ = source$.pipe(
    delayWhen(x => empty().pipe(delay(100 * x * x))
    )
);

example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
