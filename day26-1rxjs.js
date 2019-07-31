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
                //多一個判斷，是否傳入的destinationOrNext原本就是Observer的實例，如果是就不用在用執行`this.safeObserver`
                if (destinationOrNext instanceof Observer) {
                    this.destination = destinationOrNext;
                    break;
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
class MapObserver extends Observer {
    constructor(observer, callback) {
        // 這裡會傳入原來的observer跟map的callback
        super(observer);//因為有繼承所以要先執行一次父層的建構式
        this.callback = callback;//保存callback
        this.next = this.next.bind(this);//確保next的this
    }
    next(value) {
        try {
            this.destination.next(this.callback(value));
            //this.destination是父層Observer保存的observer物件
            //這裡this.callback(value)就是map的操作
        } catch (err) {
            this.destination.error(err);
            return;
        }
    }
}
class Observable {
    constructor(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;//把subscribe存到 _subscribe屬性中
        }
    }
    subscribe() {
        const observer = new Observer(...arguments);
        //先用this.operator判斷當前的observable是否具有operator
        if (this.operator) {
            this.operator.call(observer, this.source);
        } else {
            // 如果沒有operator再直接把observer丟給_subscribe
            this._subscribe(observer);
        }
        return observer;
    }
    map(callback) {
        const observable = new Observable();//邁立新的observable
        observable.source = this;//保存當前的observable(資料源)
        observable.operator = {
            call: (observer, source) => {
                //執行這個operator的行為
                const newObserve = new MapObserver(observer, callback);
                //邁立包裹後的observer
                //訂閱原本的資料源，並回傳
                return source.subscribe(newObserve);

            }// 儲存當前operator行為，並作為是否有operator的依據
        };//
        return observable;//返回這個新的observable
    }
}
Observable.create = function (subscribe) {
    return new Observable(subscribe);
}
//建立靜態方法
Observable.fromArray = function (array) {
    if (!Array.isArray(array)) {
        // 如果傳入的參數不是陣列，則拋出例外
        throw new Error("params need to be an arrray");
    }
    return new Observable(function (observer) {
        try {
            // 遍歷每個元並送出
            array.forEach(value => observer.next(value));
            observer.complete();
        } catch (err) {
            observer.error(err);
        }
    });
}
// function create(subscriber) {
//     const observable = {
//         subscribe: function (observerOnNext, error, complete) {
//             const realObserver = new Observer(observerOnNext, error, complete)
//             subscriber(realObserver);
//             return realObserver;
//         }
//     }
//     return observable;
// }

// var observable = new Observable(function (observer) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
//     observer.next('not work');
// });
// var observable = Observable.create(function (observer) {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
//     observer.next('not work');
// })
var observable = Observable.fromArray([1, 2, 3, 4, 5])
    .map(x => x + 3)
    .map(x => x + 1);
var observer = {
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!')
    }
}
observable.subscribe(observer);