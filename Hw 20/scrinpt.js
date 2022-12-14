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

// let result = 0;
// const newArr = arr
//   .filter(function(val) {
//     return val > 0;                     // сума позитивних буде 438 !
//   }) 
//   .forEach(function(val) {
//     result += val;
//   })

//   console.log(result);


  let negSum = 0;
  const novaArr = arr
    .filter(function(val) {
      return val < 0;                     // сума непозитивних буде -357 !
    }) 
    .forEach(function(val) {
      negSum += val;
    })
  
    console.log(negSum);