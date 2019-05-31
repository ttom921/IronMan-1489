// const numbers = [1, 2, 3]
// const iterator= numbers[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//創建Observable
import { Observable } from "rxjs";
const source$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

const observercb = {
    next: item => console.log(item)
}
console.log("start")
source$.subscribe(observercb)
console.log("end")

//另一種寫法
source$.subscribe(observer => {
    console.log(observer)
})