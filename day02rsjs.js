// const numbers = [1, 2, 3]
// const iterator= numbers[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//創建Observable
// import { Observable } from "rxjs";
// const source$ = new Observable(observer => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
// });

// const observercb = {
//     next: item => console.log(item)
// }
// console.log("start")
// source$.subscribe(observercb)
// console.log("end")


//另一種寫法
// import { Observable } from "rxjs";
// //建立流物件
// const source$ = new Observable(observer => {
//     //發射數據
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
// });
// console.log("start");

// //訂閱它
// source$.subscribe(data => {
//     console.log(data);
// })
// console.log("end");
