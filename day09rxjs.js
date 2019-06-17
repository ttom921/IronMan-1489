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

import { interval, from } from "rxjs";
import { take, takeLast } from "rxjs/operators";
var source$ = interval(1000).pipe(
    take(6));
var example$ = source$.pipe(
    takeLast(2));

example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('error: ' + err) },
    complete: () => { console.log('complete'); }
});   