//ДЗ 11. Rainbow render

// Дано: 
// hero = ['Ivan'];
// native = ['York','Of'];
// destination = ['Poltava','In'];
// Используя циклы, if/else, switch/case и методы 
// .push(), .pop(), .unshift(), 
// .shift(), .concat(), .splice(), .reverse() .join():

// 1. Объединить массивы destination, native, hero в общий массив rainbow.
// 2. Сделать реверс элементов полученного массива rainbow.

// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился 
//    массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
// 4. Вывести элементы полученного массива в html в виде, который представлен в 
//    прикрепленном рисунке rainbow.png.
//    Шрифт надписей на картинке Quicksand. Вы можете взять любой))
//    Использовать все методы не обязательно! Берем только те, 
//    которые помогут вам привести массив к такому виду,
//   что бы вывести его как на прикрепленной картинке rainbow.png.

// hero = ['Ivan'];
// native = ['York','Of'];
// destination = ['Poltava','In'];

// let rainbow = destination.concat('Battle','Gave', native, hero,);
// rainbow.reverse()

// let newRainbow = rainbow.join(" ");                // Ivan Of York In Poltava



// document.write(newRainbow);
// console.log(newRainbow);


colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

circleArr = [];
 
for(i = 0; i < colors.length; i++) {
    circleArr.push(`
      <div class="circle" style="background-color:${colors[i]}"></div>
 `)  
}
document.write(`
<div class="wrapp">
     ${circleArr.join(" ")}
</div>
`);


