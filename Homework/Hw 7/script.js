     // ДЗ 7. Калькулятор
// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). 
//    Спрашиваем до тех пор, пока он не введет допустимое значение
// 2) Запрашиваем сколько операндов он хочет использовать. 
//    Это должно быть ЧИСЛО больше 1 и меньше 7. 
//    Спрашиваем пока пользователь не введет допустимое значение
// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО.
//    Запрашиваем пока пользователь не введет допустимое значение
// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).

let operation = prompt('Введіть операцію: +, -, /, *');
let operands = +prompt('Введіть кількість операндів:');
let result = 0;

if (operation === '+' || operation === '-' || operation === '/' || operation === '*') {
    if (operands >= 1 && operands <= 7) {
        for (let i = 0; i < operands; i++) {
            let operand = +prompt('Введіть операнд:');
            if (operation === '+') {
                result += operand;
            } else if (operation === '-') {
                result -= operand;
            } else if (operation === '/') {
                result /= operand;
            } else if (operation === '*') {
                result *= operand;
            }
        }
    } else {
        alert('Введіть число від 1 до 7');
    }
} else {
    alert('Введіть правильну операцію');
}
   alert(result);          // варіант мій 
   
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//  debugger             // school variant 
// do {
//     operation = prompt("Select a operation (+ - * / ")
// } while(operation !=="+" && operation !== "-" && operation !== "*" &&  operation !== "/");

// do {
//     countOfOperands = parseInt(prompt("How many numbers you want to use").replaceAll(" ", ""));   
// } while (countOfOperands >= 7 || countOfOperands <= 1 || isNaN(countOfOperands));

// result = 0;
// for(i = 1; i <= countOfOperands; i++) {
//     do {
//         number = parseInt(prompt(`Select a number ${i}`).replaceAll(" ", ""));
//     } while(isNaN(number))
    
//     switch(operation) {                                            
//         case "+":
//             result += number;
//             break;
//         case "-":
//             result = i === 1 ? number : result - number;
//             break;
//         case "*":
//             if(i === 1) result = 1;
//             result *= number;
//             break;
//         case "/":
//             result = i === 1 ? number : result / number;
//             break;            
//     }
// }

// alert(result);     // school variant 

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// //перед promt використовуємо знак + щоб привести введене значення до числа
// const num1 = +prompt('Введіть 1 число?');
// //перед promt використовуємо знак + щоб привести введене значення до числа
// const num2 = +prompt('Введіть 2 число?');
// const znak = prompt('Введіть знак операції?');
// let result;

// switch (znak) {
//   case '+':
//     result = num1 + num2;                    // моя робота але не до кінця
//     break;
//   case '-':                                  // працює але треба перевести в while
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num1/num2;
//     break;
// }
// alert(`${num1} ${znak} ${num2} = ${result}`);

//................................................................
    
// const number1 = parseFloat(prompt(`Enter number 1: `));
// const number2 = parseFloat(prompt(`Enter number 2: `));

// const operator = prompt (`Enter operator (+, -, *, / )`)
//  let result = 0;
//  if(isNaN(number1) || isNaN(number2)){
//     alert('Wrong Input! Try again')                   // перетворити у while
//  }else{                                               // моя робота але не до кінця

//     if(operator == '+'){ 
//         result = number1 + number2;
//     } else if(operator =='-'){
//         result = number1 - number2;
//     }else if(operator =='*'){
//         result = number1 * number2;
//     }else if(operator =='/'){
//         result = number1 / number2; 
//     }       
//  } 
//  alert(number1 + operator + number2 + '=' + result)

// x = parseInt(prompt("Enter th first number"));
// y = parseInt(prompt("Enter th second number"));
// let a = x + y;
// let w= x - y;
// let s = x * y;
// let d = x / y;

// alert("the sum is:" + a)
// alert("the sum is:" + w)
// alert("the sum is:" + s)
// alert("the sum is :" + d)     // моя робота але не до кінця
