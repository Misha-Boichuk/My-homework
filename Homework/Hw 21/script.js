// ДЗ 21. Change and render array

// Дано:
// let amount = 100;
// let monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// let tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',360],
//    ['A whole lot of nothing',240]
// ];
// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и
//  добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

/* <tr>
  <td>Task name: Write a tutorial</td>
  <td>Task duration: 3 hours</td>
  <td>Task amount: $300</td>
</tr> */

let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

const days = monday.concat(tuesday)
  .map(function(day) {
    day[1] /= 60;
    return day;
  }) 
  .filter(function(day) {
    return day[1] > 2;
  })
  .map(function(day) {
    const dayAmount = day[1] * amount;
    day.push(dayAmount);

    return day;
  })
  .map(function(days) {
    return `
     <tr>
      <td>Task name:${days}/td>
      <td>Task duration:${days[1]} hours</td>
      <td>Task amount: ${days[2]}</td>
    </tr> 
    ` 
  })
  .join("")

document.write(`
   <table>${days}</table>
`)
