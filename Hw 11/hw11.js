// Дано: 
// hero = ['Ivan'];
// native = ['York','Of'];
// destination = ['Poltava','In'];
// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), 
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
// destination = ['Poltava','In']

// colors = ['red', 'yellow', 'green'];

// for(i = 0; i < colors.length; i++ ) {
//     document.write(`
//        <div class="wrapp">
//            <div class="circle" style "backgraound-color: ${colors[i]}"></div>
//        </div.
//     `)
// }

animalsTypes = ['dog', 'cat', 'mouse', 'fox', 'bear', 'tiger', 'dolphin', ];
animalsIcons = ['🐕', '🐱', '🐁', '🦊', '🐻', '🐅', '🐬', '🐳', '❓'];

biggerArr = animalsTypes.length > animalsIcons.length ? animalsTypes : animalsIcons;

for ( i = 0; i < biggerArr.length; i ++) {
    if (animalsIcons[i] === undefined) {
        console.log(`${animalsTypes[i]} - ❓`);

    } else  if (animalsTypes[i] === undefined) {
        console.log(`❓ - ${animalsIcons[i]}`);
    } else {
        console.log(`${animalsTypes[i]} - ${animalsIcons[i]}`);
    }
}