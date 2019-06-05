



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

// import { from } from "rxjs";
// var source$ = from(new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello RxJs');
//     }, 3000);
// }));

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


// import { fromEventPattern } from "rxjs";

// class Producer {
//     constructor() {
//         this.listeners = [];
//     }
//     addListener(listener) {
//         if (typeof listener === 'function') {
//             this.listeners.push(listener)
//         } else {
//             throw new Error('listener 必須是 function')
//         }
//     }
//     removeListener(listener) {
//         this.listeners.splice(this.listeners.indexOf(listener), 1)
//     }
//     notify(message) {
//         this.listeners.forEach(listener => {
//             listener(message);
//         })
//     }
// }
// // ------- 以上都是之前的程式碼 -------- //
// var egghead = new Producer();
// // egghead 同時具有 註冊監聽者及移除監聽者 兩種方法

// var source$ = fromEventPattern(
//     (handler) => egghead.addListener(handler),
//     (handler) => egghead.removeListener(handler)

// );
// source$.subscribe({
//     next: function (value) {
//         console.log(value);
//     },
//     complete: function () {
//         console.log('complete!');
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });
// egghead.notify('Hello! Can you hear me?');

// import { empty } from "rxjs";

// var source$ = empty();
// source$.subscribe({
//     next:function(value){
//         console.log(value)
//     },
//     complete: function() {
//         console.log('complete!');
//     },
//     error: function(error) {
//         console.log(error)
//     }
// });


// import { never } from "rxjs";
// var source$ = never();
// source$.subscribe({
//     next: function(value) {
//         console.log(value)
//     },
//     complete: function() {
//         console.log('complete!');
//     },
//     error: function(error) {
//         console.log(error)
//     }
// });
import { throwError } from "rxjs";
var source$ = throwError('Oop!');
source$.subscribe({
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!');
    },
    error: function (error) {
        console.log('Throw Error: ' + error)
    }
});
// Throw Error: Oop!