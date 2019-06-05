import { subscribeToIterable } from "rxjs/internal-compatibility";

// function saveMoney(newSaving = 0) {
//     var myAccount = 20000;
//     return function () {
//         return myAccount + newSaving;
//     }
// }
// total = saveMoney(1000);
// console.log(total());

function accumulation(number=0){
    return function(){
        console.log(number++);
    }
}
var total= accumulation();
total();
total();
total();