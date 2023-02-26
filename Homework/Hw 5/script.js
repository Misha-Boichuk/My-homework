      // ДЗ 5. switch...case

// Переписати код нижче з використанням конструкції switch…case

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// switch (numOrStr) {
//     case null:
//         console.log('ви скасували');
//         break;
//     case '':
//         console.log('Empty String');
//         break;
//     case isNaN(+numOrStr):
//         console.log(' number is Ba_NaN'); 
//         break;
//     default:
//         console.log('OK!');    // повертає завжди 'OK!' // не працює правильно
//         break;
// }
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
numOrStr = prompt('input number or string');
console.log(isNaN(+numOrStr));

switch (numOrStr && (numOrStr.trim() || isNaN(+numOrStr))) {
    case null:
        console.log('ви скасували');
        break;
    case "":                              // School variant 
        console.log('Empty String');;
        break;
    case true:
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');    //  повертає true or false i завжди 'OK!'
}                              //  працює правильно

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// switch (isNaN(+numOrStr) || numOrStr && numOrStr.trim()) {
//     case null:
//         console.log('ви скасували')
//         break;
//     case '':
//         console.log('Empty String')
//         break;                                  
//     case  true:
//         console.log(' number is Ba_NaN')
//         break;                              // варіант школи 
//     default:
//         console.log('OK!')
// }

