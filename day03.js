//--- //物件宣告第一種
// var myObj = {
//     name: "123",
//     age: 18
// }
// console.log(myObj.name)
// console.log(myObj.age)
//--- //物件宣告第二種
// var curObj= new Object();
// curObj.name="456";
// curObj.age=28;
// console.log(curObj.name)
// console.log(curObj.age)

// var introduction={
//     name:'Jim',
//     favFood:'Sushi',
//     breakIce:function(){
//         console.log(`Hello I am ${this.name},My favFood is ${this.favFood}`)
//     }
// }
// introduction.breakIce();

//---特性存取(property access)和鍵值存取(key access)
// var firstName = 'Hu';
// var ages = {
//     FirstName: 'Hu',
//     'firstName': 'Hu',
//     'Hu Jim': 28,
//     'Hu Koa': 60
// }
// //特性存取(property access)
// console.log(ages.FirstName);
// console.log(ages.firstName);

// //鍵值存取(key access)
// console.log(ages[firstName + ' Jim']);
// //加入一個新的
// ages[firstName + ' Ge'] = 30;
// console.log(ages);

//-- 物件的複製
// var firstName = 'Hu';

// var ages = {
//     'Hu Jim': 28,
//     'Hu Koa': 60
// }
// //Shallow Clone
// var agesNextYear = ages;
// agesNextYear[firstName + ' Jim'] = 29;
// console.log('Shallow Clone ages:' + ages[firstName + ' Jim']);
// console.log('Shallow Clone agesNextYear' + agesNextYear[firstName + ' Jim']);

//Deep Clone
var firstName = 'Hu';

var ages = {
    'Hu Jim': 28,
    'Hu Koa': 60
}
var agesNextYear= Object.assign({},ages);
agesNextYear[firstName + ' Jim'] = 29;
console.log('Deep Clone ages:' + ages[firstName + ' Jim']);
console.log('Deep Clone agesNextYear' + agesNextYear[firstName + ' Jim']);
