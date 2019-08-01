// import { Observable, asyncScheduler } from "rxjs";
// import { observeOn } from "rxjs/operators";

// var observable = Observable.create(function (observer) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
// });
// console.log("before subscribe");
// observable.pipe(observeOn(asyncScheduler)).subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });
// console.log("after subscribe");    

// import { from, asyncScheduler } from "rxjs";
// import { observeOn } from "rxjs/operators";
// var observable = from([1, 2, 3, 4, 5]).pipe(
//     observeOn(asyncScheduler)
// );
import { from, asyncScheduler, of } from "rxjs";
import { repeat, take } from "rxjs/operators";
of(10).pipe(
    repeat(),
    take(1)
).subscribe(console.log);