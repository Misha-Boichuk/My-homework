     // ДЗ 16. Функція із замиканням

// Написати функцію, яка приймає 1 параметр.
// з тим,  що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:

// sum(3) = 3

// sum(5) = 8

// sum(20) = 28


// function A(x) {
//     function B(y) {
//       function C(z) {
//         console.log(x + y + z);
//       }
//       C(20);                      // return 28 
//     }
//     B(5);
//   }
//   A(3); 


function sum(a) {
    return function(b) {
        return function (c) {
            return sum = a + (c + b);
        }                                                // повертає значення, але не впернений
    }
}
console.log(sum(3)(5)(20));
