// function checkDictionary(key) {
//     let words = {
//         'apple': "蘋果",
//         'banana': "香蕉",
//         'peach': "桃子"
//     };
//     if (words[key]) {
//         return words[key];
//     } else {
//         throw key;
//     }
// }

// try {
//     let res = checkDictionary("apple");
//     console.log(res);
// } catch (e) {
//     console.log("We don\'t know this world: " + e);
// }

function checkDictionary(key) {

    let words = {
        'apple': "蘋果",
        'banana': "香蕉",
        'peach': "桃子"
    };
    if (words[key]) {
        return words[key];
    }
    else {
        throw key; //有try catch 一定要有 不然會undefie
    }
}

try {
    let res = checkDictionary("mongo");
    console.log(res);
} catch (e) {
    console.log("We don\'t know this world: " + e);
} 