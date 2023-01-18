//    ДЗ 20. Пошук у масиві

// Дан масив [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, остальні обнулити.

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 
   46, 4, -51, 27,-63, 4, -54, 76, -4, 12, -35, 4, 47];
   
// let  arrP = arr.filter(function(e){return e>0;});    // return + element 
// console.log(arrP);  

let  arrM = arr.filter(function(e){return e<0;});    // return  - element 
console.log(arrM);     

///////////////////////////////////////////
let result = 0;
const newArr = arr
  .filter(function(val) {
    return val > 0;          // сума позитивних 438 !
  }) 
  .forEach(function(val) {
    result += val;
  })

  console.log(result);

//////////////////////////////////////////

//   let resultAll = arr.reduce(function(sum, current) {
//     return sum + current;
//   }, 0);
//   console.log(resultAll );  //  All sum: 81 

//////////////////////////////////////////////////////////
//    function sum(a, b){
//     return a + b;
//     }
// let s=arr.reduce(sum);
// console.log("All sum: "+s);  // 81

/////////////////////////////////////////////////////////////


//////////////////////////////////////////////////
// arr.forEach((num, index) => {
//     return arr[index] = num ;   /// повертає масив 
// });
// console.log(arr);

// let doubled = arr.map(num => {
//     return num ;
// });                           // повертає маисв !!
// console.log(doubled);

///////////////////////////////////
// let negSum = 0;
// const novaArr = arr
//   .filter(function(val) {
//     return val < 0;          // сума непозитивних буде -357 !
//   }) 
//   .forEach(function(val) {
//     negSum += val;
//   })

//   console.log(negSum);


// function isPositive(number) {
//   return number > 0;
// }

// console.log( arr.every(isPositive) ); // false, не все положительные
// console.log( arr.some(isPositive) ); // true, есть хоть одно положительное

