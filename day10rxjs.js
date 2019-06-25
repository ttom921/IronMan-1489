import { interval } from "rxjs";
import { take, combineLatest } from "rxjs/operators";

var source$ = interval(500).pipe(take(3));
var newest$ = interval(300).pipe(take(6));

var example$ = source$.pipe(combineLatest(newest$, (x, y) => x + y));
example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('error: ' + err) },
    complete: () => { console.log('complete'); }
});