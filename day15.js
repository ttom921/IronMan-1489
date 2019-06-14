var fs = require('fs');

var reformat = []
var tag = -1
var output = fs.readFileSync('example.txt', "utf-8")
    .trim()
    .split('\n')
    .map((element) => {
        items = element.split("\t")
        console.log(items);
        // items.forEach(item => {
        //     console.log(item);
        //     var title, data, flag;
        //     title = item[0]
        //     data = item[2]
        //     flag = item[4]
        //     if (title !== "") {
        //         reformat.push({ 'title': title, 'content': [{ 'name': data, 'flag': flag }] })
        //         tag += 1;
        //     }
        //     else {
        //         reformat[tag].content.push({ 'name': data, 'flag': flag })
        //     }
        // });
    })
    ;

reformat = JSON.stringify(reformat)
//console.log(reformat);
// 
fs.writeFileSync('example.json', reformat, 'utf-8')

// var output = fs.readFileSync('example.txt', 'utf-8')
//     .trim()
//     .split('\n')
//     .map((item) => { item.split('\t') })
//     .map((item) => {
//         var title, data, flag;
//         title = item[0]
//         data = item[2]
//         flag = item[4]
//         if (title !== "") {
//             reformat.push({ 'title': title, 'content': [{ 'name': data, 'flag': flag }] })
//             tag += 1;
//         }
//         else {
//             reformat[tag].content.push({ 'name': data, 'flag': flag })
//         }
//     })

// reformat = JSON.stringify(reformat)
// fs.writeFileSync('example.json', reformat, 'utf-8')