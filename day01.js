
var people = [
    {
        name: 'Jim',
        nickname: 'Hamburger',
        age: 28
    },
    {
        name: 'Andy',
        nickname: 'Spaghetti',
        age: 27
    },
    {
        name: 'Kevin',
        nickname: 'Curry',
        age: 27
    },
    {
        name: 'Arel',
        like: 'Sushi',
        age: 27
    }
];

var age = [28, 27, 27, 27]
//forEach
// age.forEach(function (item, index) {
//     console.log(item, index);
// });
// age.forEach((item, index) => {
//     console.log(item, index);
// });

//map
// var result=age.map(function (item, index) {
//     item = item + index
//     return item;
// });
// console.log(result);
// result= age.map((item,index)=>{
//     item= item+index;
//     return item;
// });
// console.log(result);

// reduce
// var rsreduce = age.reduce(function (item, item2) {
//     item = item + item2;
//     return item;
// });
// // 28 + 27 + 27 + 27 = 109
// console.log(rsreduce);
// rsreduce = age.reduce((item, item2) => {
//     item = item + item2;
//     return item;
// });
// // 28 + 27 + 27 + 27 = 109
// console.log(rsreduce);

//filter
// var rsfilter = age.filter(function (item) {
//     if (item < 28)
//         return true;
// });
// console.log(rsfilter);
// rsfilter = age.filter((item) => {
//     if (item < 28)
//         return true;
// });
// console.log(rsfilter);
//

// people.forEach(function (item) {
//     item.age += 1;
// });
// console.log(people);

people.forEach((item) => {
    item.age += 1;
});
console.log(people);