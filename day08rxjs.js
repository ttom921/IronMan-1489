import { fromEvent, of } from "rxjs";

// import { interval } from "rxjs";
// import { map, mapTo, take } from 'rxjs/operators';
// var source$ = interval(1000);
// var example$ = source$.pipe(take(3));

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log("Error: " + err); },
//     complete: () => { console.log("complete"); }
// });

// import { interval } from "rxjs";
// import { first, take } from "rxjs/operators";
// var source$ = interval(1000);
// var example$ = source$.pipe(first());
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log("Error: " + err); },
//     complete: () => { console.log("complete"); }
// });

// ({
//     plugins: ['jsdom-quokka-plugin'],
//     jsdom: { html: `<div id="test">Hello</div>` }
// })
// import { interval, fromEvent } from "rxjs";
// import { first, takeUntil } from "rxjs/operators";
// var source$ = interval(1000);
// var click = fromEvent(document.body, "click");
// var example$ = source$.pipe(takeUntil(click));
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

// import { of, fromEvent } from "rxjs";
// import { map,concatAll } from 'rxjs/operators';
// var click = fromEvent(document.body, 'click');
// var source$ = click.pipe(
//     map(e => of(1, 2, 3))
// );
// var example$ = source$.pipe(concatAll());
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

import { interval } from "rxjs";
import { take, concatAll } from "rxjs/operators";
var obs1$ = interval(1000).pipe(take(5));
var obs2$ = interval(500).pipe(take(2));
var obs3$ = interval(2000).pipe(take(1));

var source$ = of(obs1$, obs2$, obs3$);
var example$ = source$.pipe(concatAll());
example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});