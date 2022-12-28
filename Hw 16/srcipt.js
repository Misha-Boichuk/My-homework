// ДЗ 16. Функція із замиканням

// Написати функцію, яка приймає 1 параметр.
// з тим,  що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:

// sum(3) = 3

// sum(5) = 8

// sum(20) = 28

// function f1(sum) {
//     return function f2 (n) {
//         return  sum  + n
//         }
//     }                 // повертає результат один раз 

// const addOne = f1(3);

// console.log(addOne(5));
// console.log(addOne(20));


// let a = 12 ; 

// function f() {
//     let b = 42;
//     console.log(b);
//     console.log(a);
// }

// f();


// let count = 0; 

// function counter() {
//     count++;

//     return count;              // повертає 1 і додає 1 після кожного повторення
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());


// function sum(a) {
//     return function(b) {
//         return a + b;             // повертає тільки перше значення
//     }
// }
// console.log((sum(3)(5)));
// console.log((sum(4)(20)));

// function sum(a) {
//     return function(b) {
//         return function (c) {
//             return c + (a + b);
//         }                       // повертає значення, але не впернений
//     }
// }
// console.log(sum(0)(3)(5));
// console.log(sum(0)(8)(20));


// function add(a){

//     return function(b){
//         console.log(a + b);    // returt just 8 
//     }

// }

// add(3)(5);


// function getCounter() { 
//     let counter = 3; 
//     return function() { 
//       return counter ++; 
//     }                            // return three value 
//   }
//   let count = getCounter();
//   console.log(count());  // 0
//    console.log(count());  // 1
//    console.log(count());  // 2