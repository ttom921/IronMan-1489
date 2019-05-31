import { from } from 'rxjs';
import { zip, of } from 'rxjs';

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