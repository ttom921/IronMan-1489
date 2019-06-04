// var arr = [1, 2, 3, 4, 5];
// //展開
// console.log(...arr);


// function showArr(num1, num2, ...num3) {
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
// }
// //打包
// showArr(...arr);

// function sayMyName(firstName, lastName) {
//     console.log(`Hollo My Name
//     is ${firstName} ${lastName}
//     `);
// }
// sayMyName("tom", "tang");

// var arr = [1, 2, 3, 4, 5]

// var res=arr.reduce((total,items)=>{
//     total +=items;
//     return total;
// });
// console.log(res);


// var test ="test";

// if(test=="test"){
//     var num5=10;
//     let num6=20;
// }
// console.log(num5);
// console.log(num6);

// function add(num1=1){
//     return num1+num2;
// }
// add(10);

function add(num1=1,num2=1){
    return num1+num2;
}
res=add(10);
console.log(res);