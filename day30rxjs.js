// import { interval } from "rxjs";
// import { take } from "rxjs/operators";

// const source$ = interval(1000).pipe(take(5));
// source$.subscribe(value => console.log("sub1: " + value));
// setTimeout(() => {
//     source$.subscribe(value => console.log("sub2: " + value));
// }, 3500);

// import { Observable } from "rxjs";
// var source$ = Observable.create(function (observer) {
//     // 訂閱時，才建立新的資料源
//     const someDataSource$ = getSomeDataSource();
//     someDataSource$.addEventListener("message", () => {
//         observer.next(data);
//     });
// });

// import { interval } from "rxjs";
// import { take, share } from "rxjs/operators";

// var source$ = interval(1000).pipe(
//     take(5),
//     share()
// );
// source$.subscribe(value => console.log("sub1: " + value));
// setTimeout(() => {
//     source$.subscribe(value => console.log("sub2: " + value));
// }, 3500);

// import { Observable } from "rxjs";
// const someDataSource = getSomeDataSource();
// const source = Observable.create(function(observer) {
//     someDataSource.addEventListener('message', (data) => {
//         observer.next(data)
//     })
// });

