import { isInteropObservable } from "rxjs/internal/util/isInteropObservable";

function example(msg, callback) {
    callback(msg)
}
example('hello callback', function (sayHi) {
    console.log(sayHi)
})

var total = [1, 2, 3, 4, 5]
var res = total.reduce((initvalue, nextitem) => {
    initvalue += nextitem
    return initvalue;
});
console.log(res);