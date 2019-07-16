// import { from, interval, zip, of } from "rxjs";
// import { map, catchError } from "rxjs/operators";
// var source$ = from(["a", "b", "c", "d", 2]);
// zip(source$, interval(500), (x, y) => x);
// var example$ = source$.pipe(
//     map(x => x.toUpperCase()),
//     catchError(error => of("h"))
// );


// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });  

// import { from, interval, zip, of, empty } from "rxjs";
// import { map, catchError } from "rxjs/operators";
// var source$ = from(["a", "b", "c", "d", 2]);
// zip(source$, interval(500), (x, y) => x);
// var example$ = source$.pipe(
//     map(x => x.toUpperCase()),
//     catchError(error => empty())
// );


// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// }); 

// import { from, interval, zip, of, empty } from "rxjs";
// import { map, catchError } from "rxjs/operators";
// var source$ = from(["a", "b", "c", "d", 2]);
// zip(source$, interval(500), (x, y) => x);
// var example$ = source$.pipe(
//     map(x => x.toUpperCase()),
//     catchError((error, obs) => obs)
// );


// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// }); 

// import { from, interval, zip, of, empty } from "rxjs";
// import { map, retry } from "rxjs/operators";
// var source$ = from(["a", "b", "c", "d", 2]);
// zip(source$, interval(500), (x, y) => x);
// var example$ = source$.pipe(
//     map(x => x.toUpperCase()),
//     retry()
// );


// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// }); 


// import { from, interval, zip, of, empty } from "rxjs";
// import { map, retry } from "rxjs/operators";
// var source$ = from(["a", "b", "c", "d", 2]);
// zip(source$, interval(500), (x, y) => x);
// var example$ = source$.pipe(
//     map(x => x.toUpperCase()),
//     retry(1)
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// }); 


// import { from, interval, zip, of, empty } from "rxjs";
// import { map, retryWhen, delay } from "rxjs/operators";
// var source$ = from(["a", "b", "c", "d", 2]);
// zip(source$, interval(500), (x, y) => x);
// var example$ = source$.pipe(
//     map(x => x.toUpperCase()),
//     retryWhen(errorObs => errorObs.pipe(delay(1000)))
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// }); 


// import { from, interval, zip, of, empty } from "rxjs";
// import { map, retryWhen, delay } from "rxjs/operators";
// var source$ = from(["a", "b", "c", "d", 2]);
// zip(source$, interval(500), (x, y) => x);
// var example$ = source$.pipe(
//     map(x => x.toUpperCase()),
//     retryWhen(errorObs => errorObs.pipe(map(err=> fetch('....'))))
// );

// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// }); 


// import { from, interval, zip, of, empty } from "rxjs";
// import { repeat } from "rxjs/operators";

// var source$ = from(["a", "b", "c"]);
// zip(source$, interval(500), (x, y) => x);

// var example$ = source$.pipe(repeat(1));
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

// import { from, interval, zip, of, empty } from "rxjs";
// import { repeat } from "rxjs/operators";

// var source$ = from(["a", "b", "c"]);
// zip(source$ ,interval(500), (x, y) => x);

// var example$ = source$.pipe(repeat());
// example$.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// }); 


import { from, interval, zip, of, empty } from "rxjs";
import { map, catchError, concat,startWith } from "rxjs/operators";


const title = document.getElementById('title');

var source$ = from(["a", "b", "c", "d", 2]);
zip(source$, interval(500), (x, y) => x).pipe(
    map(x => x.toUpperCase())
    // 通常 source 會是建立即時同步的連線，像是 web socket
);
var example$ = source$.pipe(
    catchError((error, obs) => obs.pipe(
        empty(),
        startWith('連線發生錯誤： 5秒後重連'),
        concat(obs.delay(5000))
    ))
);
example$.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
}); 