// import { of } from "rxjs";

// var source$ = of('Jery', 'Anna');
// source$.subscribe({
//     next: function (value) {
//         console.log(value)
//     },
//     complete: function () {
//         console.log('complete!');
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });

// import { from } from "rxjs";
// var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
// var source$ = from(arr);
// source$.subscribe({
//     next: function (value) {
//         console.log(value);
//     },
//     complete: function () {
//         console.log('complete');
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });

// import { from } from "rxjs";
// var source$ = from('鐵人賽');
// source$.subscribe({
//     next: function (value) {
//         console.log(value);
//     },
//     complete: function () {
//         console.log('complete');
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });

import { from } from "rxjs";
var source$ = from(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello RxJs');
    }, 3000);
}));

source$.subscribe({
    next: function (value) {
        console.log(value);
    },
    complete: function () {
        console.log('complete');
    },
    error: function (error) {
        console.log(error);
    }
});