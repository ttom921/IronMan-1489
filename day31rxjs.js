import { interval } from "rxjs";
import { take, tap, map } from "rxjs/operators";

const source$ = interval(1000).pipe(take(3));
const example$ = source$.pipe(
    tap(x => console.log("tap log: " + x)),
    map(X => X + 1)
);
example$.subscribe((X) => {
    console.log("subscirption log: " + X)
});