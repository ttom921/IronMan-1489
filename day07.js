let fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('It is a banana');
        break;
    case 'peach':
        console.log('It is a peach');
        break;
    case 'apple':
    case 'APPLE':
        console.log('It is a apple');
        console.log('not break');
        break;
    default:
        console.log('I don\'t know what is it');
        break;
}