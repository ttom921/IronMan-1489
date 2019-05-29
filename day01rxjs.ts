import { from } from 'rxjs';
import { zip, of } from 'rxjs';
//import  {Observable} from 'rxjs';

// var array = [10, 20, 30];
// var result = from(array);
// result.subscribe(x => console.log(x));

// //RXjsTest
// //import { Observable } from 'rxjs/Observable';
// import Rx from 'rxjs';
// import { Observable, Subscriber, from } from 'rxjs';
// var a, b = 1, c = 2;
// a = b + c;
// console.log('b=' + b);
// console.log('c=' + c);
// console.log('a=' + a);
// b = 3;
// c = 2;
// console.log('a=' + a);

var b$ = from([1, 3]);
var c$ = from([2, 2]);
var a$ = zip(b$, c$, (b, c) => {
    console.log('b=' + b);
    console.log('c=' + c);
    return b + c;
});
a$.subscribe(a => {
    console.log('a=' + a);
})