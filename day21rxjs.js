// var source = [1, 2, 3, 4, 5];
// var example = source.map(x => x + 1);
// console.log(example)

// var source = [1, 2, 3];
// var example = source
//     .filter(x => x % 2 === 0)// 這裡會運算並返回一個完整的陣列
//     .map(x => x + 1);// 這裡也會運算並返品一個完整的陣列
// console.log(example)

import { from } from "rxjs";
import { filter, map } from "rxjs/operators";


var source$ = from([1, 2, 3, 4, 5, 6, 7, 8]);
var example$ = source$.pipe(
    filter(x => x === 2),
    map(x => x + 1),
);
example$.subscribe(console.log);



