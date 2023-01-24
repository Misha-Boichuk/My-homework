  // ДЗ 20. Пошук у масиві

// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
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
  
let  Posit = arr.filter((item) => item >0 );
let  PositSum = Posit.reduce((sum, current) => sum + current, 0);
console.log(`Сума позитивних елем: ${PositSum}  Кількість: ${Posit.length}`);  

console.log(`${Math.max(...arr)} порядковий номер ${arr.indexOf(76)} `);  
console.log(`${Math.min(...arr)} порядковий номер ${arr.indexOf(-63)} `);  

let  Negative = arr.filter((item) => item <0 );
console.log(`Кільк негат елем: ${Negative.length}`);   

let  Positive = arr.filter((item) => item >0 );
let  Odd = Positive.filter((item) => item % 2 !== 0 );
console.log(`Кількість непарних позит елем: ${Odd.length}`); 

let  OddSum = Odd.reduce((sum, current) => sum + current, 0); 
console.log(`Сума непарних позит елем: ${OddSum}`); 

let  Even = Positive.filter((item) => item % 2 === 0 );
console.log(`Кількість  парних позит елем: ${Even.length}`); 

let  EvenSum = Even.reduce((sum, current) => sum + current, 0);
console.log(`Сума парних позит елем: ${EvenSum}`); 

let  Product = arr.filter((item) => item > 0 );
let  PositiveSum = Product.reduce((sum, current) => sum * current, 1);
console.log(`Добуток позитивних елем: ${PositiveSum}`); 

let  Max = Math.max(...arr);
let  MaxIndex = arr.indexOf(Max);
let  NewArr = arr.map((item, index) => index === MaxIndex ? item : 0);
console.log(`Найбільший елемент масиву: ${Max}`);  