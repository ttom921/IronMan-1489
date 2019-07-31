import { count } from "rxjs/operators";

// function create(subscriber) {
//     var observable = {
//         subscribe: function (observer) {
//             subscriber(observer)
//         }
//     };
//     return observable;
// }

// var observable = create(function (observer) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
//     observer.next("still work");
// });

// var observer = {
//     next: function (value) {
//         console.log(value);
//     },
//     // complete: function () {
//     //     console.log("complete");
//     // }
// }
// observable.subscribe(observer);



// 預設空的 observer
const emptyObserver = {
    next: () => { },
    error: (err) => { throw err; },
    complete: () => { }
}
class Observer {
    constructor(destinationOrNext, error, complete) {
        switch (arguments.length) {
            case 0:
                // 空的 observer
                this.destination = this.safeObserver(emptyObserver);
                break;
            case 1:
                if (!destinationOrNext) {
                    // 空的 observer
                    this.destination = this.safeObserver(emptyObserver);
                }
                if (typeof destinationOrNext === "object") {
                    // 傳入了observer物件
                    this.destination = this.safeObserver(destinationOrNext);
                }
                break;

            default:
                //如果上面都不是，代表應該是傳入了一到三個function
                this.destination = this.safeObserver(destinationOrNext, error, complete);
                break;
        }
    }
    safeObserver(observerOrNext, error, complete) {
        let next;
        if (typeof (observerOrNext) === "function") {
            // observerOrNext 是 next function
            next = observerOrNext;
        } else if (observerOrNext) {
            // observerOrNext 是 observer 物件
            next = observerOrNext.next || function () { };
            error = observerOrNext.error || function (err) {
                throw err;
            };
            complete = observerOrNext.complete || function () { };
        }
        //最後回傳我們預期的 observer 物件
        return {
            next: next,
            error: error,
            complete: complete
        }
    }
    unsubscribe() {
        this.isStipped = true;// 偷塞一個屬性 isStopped
    }
    next(value) {
        if (!this.isStipped && this.next) {
            // 先判斷是否停止過
            try {
                this.destination.next(value);//值送值
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
        }
    }
    error(err) {
        if (!this.isStipped && this.error) {
            // 先判斷是否停止過
            try {
                this.destination.error(err);// 傳送錯誤
            } catch (anotherError) {
                this.unsubscribe();
                throw anotherError;
            }
            this.unsubscribe();
        }
    }
    complete() {
        if (!this.isStipped && this.complete) {
            // 先判斷是否停止過
            try {
                this.destination.complete();// 發送停止訊息
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
        }
        this.unsubscribe(); // 發送停止訊息後退訂
    }
}

function create(subscriber) {
    const observable = {
        subscribe: function (observerOnNext, error, complete) {
            const realObserver = new Observer(observerOnNext, error, complete)
            subscriber(realObserver);
            return realObserver;
        }
    }
    return observable;
}

var observable = create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    observer.next('not work');
});
var observer = {
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!')
    }
}
observable.subscribe(observer);