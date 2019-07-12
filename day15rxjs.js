// import { interval, zip, from } from "rxjs";
// import { distinct } from "rxjs/operators";

// var source$ = from(["a", "b", "c", "a", "b"]);
// zip(source$, interval(300), (x, y) => x);

// var example$ = source$.pipe(
//     distinct()
// );
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log("Error: " + err); },
//     complete: () => { console.log("complete") }
// });

// import { interval, zip, from } from "rxjs";
// import { distinct } from "rxjs/operators";
// var source$ = from([{ value: "a" }, { value: "b" }, { value: "c" }, { value: "a" }, { value: "c" }]);
// zip(source$, interval(300), (x, y) => x);
// var example$ = source$.pipe(
//     distinct((x) => {
//         return x.value
//     })
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log("Error: " + err); },
//     complete: () => { console.log("complete") }
// });

// import { interval, zip, from } from "rxjs";
// import { distinct } from "rxjs/operators";


// var source$ = from(["a", "b", "c", "a", "c"]);
// zip(source$, interval(300), (x, y) => x);
// var flushes$ = interval(1300);
// var example$ = source$.pipe(
//     distinct(null, flushes$)
// );
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log("Error: " + err); },
//     complete: () => { console.log("complete") }
// });


import { interval, zip, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

var source$ = from(['a', 'b', 'c', 'c', 'b']);
zip(interval(300), (x, y) => x);
var example$ = source$.pipe(
    distinctUntilChanged()
);
example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log("Error: " + err); },
    complete: () => { console.log("complete") }
});
