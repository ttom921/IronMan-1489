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
({
    plugins: ['jsdom-quokka-plugin'],
    jsdom: { html: `<div id="test">Hello</div>` }
})
import { interval, fromEvent } from "rxjs";
import { first, takeUntil } from "rxjs/operators";
var source$ = interval(1000);
var click = fromEvent(document.body, "click");
var example$ = source$.pipe(takeUntil(click));
example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});