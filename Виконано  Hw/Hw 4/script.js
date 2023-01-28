// ДЗ 4. Середнє значення
// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел 

let firstNumber = parseInt(prompt("Set first number?"));
let secondNumber = parseInt(prompt("Set second number?"));
let thirdNumber = parseInt(prompt("Set third number?"));
let average = (firstNumber + secondNumber + thirdNumber) / 3;
alert(average);  // My variant

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// a = parseInt(prompt("Set first number?"));
// b = parseInt(prompt("Set first number?"));
// c = parseInt(prompt('Third number'));                  

// n = 3;
// sum = (a + b + c) / n;     // My variant
// alert(sum); 

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// firstValue = parseInt(prompt("Please enter first number?"));
// secondValue = parseInt(prompt("Please enter first number?"));
// thirdValue = parseInt(prompt("Please enter first number?"));      // School variant 

// getAverageValue = Math.round((firstValue + secondValue + thirdValue) / 3);

// alert(`Середнє значення ${firstValue}, ${secondValue}, ${thirdValue} дорівнює ${getAverageValue}`);
