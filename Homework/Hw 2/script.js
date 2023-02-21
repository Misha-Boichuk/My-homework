// ДЗ 2. Математичні операції
// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:

// //Користувач ввів 2 і 2:

// 2+2=4
// 2-2=0
// 2*2=4         // My variant
// 2/2=1

// let firstNumber = prompt("Enter first number");
// let secondNumber = prompt("Enter second number");
// alert(firstNumber + "+" + secondNumber + "=" + (Number(firstNumber) + Number(secondNumber)));
// alert(firstNumber + "-" + secondNumber + "=" + (Number(firstNumber) - Number(secondNumber)));
// alert(firstNumber + "*" + secondNumber + "=" + (Number(firstNumber) * Number(secondNumber)));
// alert(firstNumber + "/" + secondNumber + "=" + (Number(firstNumber) / Number(secondNumber)));  // виводить по черзі дії

firstNumber = parseInt(prompt("Set first number?"));
secondNumber = parseInt(prompt("Set second number?"));

sum = firstNumber + secondNumber;
minus = firstNumber - secondNumber;
multiplication = firstNumber * secondNumber;            
division = firstNumber / secondNumber;                  // School variant         
alert(`Result:
    ${firstNumber} + ${secondNumber} = ${sum};
    ${firstNumber} - ${secondNumber} = ${minus};
    ${firstNumber} * ${secondNumber} = ${multiplication};
    ${firstNumber} / ${secondNumber} = ${division};         
`);           //  виводить зразу 4 дії


