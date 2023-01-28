//    ДЗ 8. Сумма факториалов
// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). 
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.

// let a = +prompt('Enter a');
// let b = +prompt('Enter b');
// let h = +prompt('Enter h');
// let sum = 0;
// let factorial = 1;

// for (let i = a; i <= b; i += h) {          // але ми ще не вивчати цикл for в циклі for
//     for (let j = 1; j <= i; j++) {
//         factorial *= j;
//     }
//     sum += factorial;
//     factorial = 1;
// }

// alert(sum);   // my variant

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// debugger
do {
    a = parseInt(prompt("Enter value a").replaceAll(" ", ""));
} while(isNaN(a) || a < 1);

do {
    b = parseInt(prompt(`Enter value b, which is greater ${a}`).replaceAll(" ", ""));
} while(a >= b || isNaN(b));

do {
    h = parseInt(prompt(`Enter step, which that is smaller ${b - a}`).replaceAll(" ", ""));
} while(h > b -a || isNaN(h));

sum = 0;
for (; a <= b; a += h ); {
  factorial = 1;
  console.log(`Факторіал числа: ${a}`);     // варіант  школи працюєпо іншому 
                                             // запитує крок і виводить число факторіалу та суму всіх факторіалів
  for(i = 1; i <= a; i++) {
    factorial *= i;
  }
  console.log(`Дорівнює: ${factorial}`);
  sum += factorial;                                    // Факторіал числа: 51
};                                                      //  Дорівнює: 
console.log(`Сума всіх факторіалів дорівнює: ${sum}`);   //   Сума всіх факторіалів дорівнює: 


