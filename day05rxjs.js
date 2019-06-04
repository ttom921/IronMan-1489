
// import { Observable } from "rxjs";
// var observable$ = Observable.create((observer) => {
//     try {
//         observer.next('Jerry');
//         observer.next('Anna');
//         throw 'some exception';
//     } catch (e) {
//         observer.error(e);
//     }
// });

// // // 宣告一個觀察者，具備 next,error,complete 三個方法
// // var observer = {
// //     next: function (value) {
// //         console.log(value);
// //     },
// //     error: function (error) {
// //         console.log('Error: ', error);
// //     },
// //     complete: function () {
// //         console.log('complete')
// //     }
// // }
// // // 用我們定義好的觀察者，來訂閱這個observable
// // observable$.subscribe(observer);

// observable$.subscribe(
//     value => { console.log(value); },
//     error => { console.log('Error: ', error); },
//     () => { console.log('complete'); }
// );

// import { Observable } from "rxjs";

// let observable$ = Observable.create((observer) => {
//     observer.next('Jerry');
//     observer.next('Anna');
// });

// observable$.subscribe({
//     next: function (value) {
//         console.log(value);
//     },
//     error: function (error) {
//         console.log(error);
//     },
//     complete: function () {
//         console.log('complete');
//     }
// });


function subscribe(observer) {
    observer.next('Jerry');
    observer.next('Anna');
}
subscribe({
    next: function (value) {
        console.log(value);
    },
    error: function (error) {
        console.log(error);
    },
    complete: function () {
        console.log('complete');
    }
});