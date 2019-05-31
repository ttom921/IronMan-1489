// //觀察者模式
// class Producer {
//     constructor() {
//         this.listeners = [];
//     }
//     addListener(listener) {
//         if (typeof listener === 'function') {
//             this.listeners.push(listener);
//         } else {
//             throw new Error('listener 必須是 function');
//         }
//     }
//     removeListener(listener) {
//         this.listeners.splice(this.listeners.indexOf(listener), 1);
//     }
//     notify(message) {
//         this.listeners.forEach(listener => {
//             listener(message);
//         });
//     }
// }

// var egghead = new Producer();
// // new 出一個 Producer 實例叫 egghead
// function listerner1(message){
//     console.log(message + ' from listener1');
// }

// function listerner2(message){
//     console.log(message+ ' from listener2');
// }

// egghead.addListener(listerner1);// 註冊監聽
// egghead.addListener(listerner2);

// egghead.notify('A new course!!');

import { Observable } from 'rxjs';
const source$ = new Observable(observer => {
    let number = 1
    let message = {
        count: number,
        message: "message "
    }

    setInterval(() => {
        number++;
        message.count = number;
        observer.next(message)
    }, 1000);
});
console.log("start");
source$.subscribe(data => {
    console.log(data);
});
console.log("end");