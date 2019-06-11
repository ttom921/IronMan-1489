

// import { of, Observable } from "rxjs";
// var people = of("Jerry", "Anna");
// function map(source$, callback) {
//     return Observable.create((observer) => {
//         return source$.subscribe((value) => {
//             try {
//                 observer.next(callback(value));
//             } catch (e) {
//                 observer.error(e);
//             }
//         },
//             (err) => { observer.error(e); },
//             () => { observer.complete(); }
//         );
//     });
// }

// var helloPeople = map(people, (item) => item + " Hello~");

// helloPeople.subscribe(console.log)

// import { interval } from "rxjs";
// import { map } from 'rxjs/operators';
// var source$ = interval(1000);
// var newest$ = source$.pipe(
//     map(x => x + 2)
// );
// newest$.subscribe(console.log);

// import { interval } from "rxjs";
// import { map, mapTo } from 'rxjs/operators';
// var source$ = interval(1000);
// var newest$ = source$.pipe(
//     mapTo(2)
// );
// newest$.subscribe(console.log);

import { interval } from "rxjs";
import { map, mapTo, filter } from 'rxjs/operators';
var source$ = interval(1000);
var newest$ = source$.pipe(
    filter(x => x % 2 === 0)
);
newest$.subscribe(console.log);