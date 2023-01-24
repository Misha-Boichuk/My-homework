
//                   ДЗ 10. Рендер карточки товара
// Дано:

// Три товара с категории vegetables:

// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:

// grapes = 20;
// raspberry = 25;
// coconut = 50;

// Задача: в зависимости от выбранного пользователем периода (winter или summer),
// категории (vegetables или fruits), товара с выбранной категории 
// (vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), 
// и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.

// Порядок действий:

// Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
// Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
// Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
// Важно: 
// Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 
// Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
// Важно: 
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 
// Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
// Важно: 
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.
// Запрашиваем у пользователя количество единиц ранее выбранного товара.
// Важно:
// Введенное значение должно быть числом и не меньше 1.
// Выводим в html информацию о выбранном товаре с финальной стоимостью покупки. Вариант вывода:
// <div class="product" align="center">
//   <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
//   <p>Selected product: <b>cabbage</b></p>
//   <p>Count of cabbages: <b>3</b></p>
//   <p>Selected period: <b>winter</b></p>
//   <p>Selected category: <b>vegetables</b></p>
//   <p>Final sum: <b>48 UAH</b></p>
// </div>


// В прикрпеленных материалах:

// Архив images.zip с картинками всех возможных товаров.
// render.png – пример вывода данных о товаре.
// Рендер карточки товара.pdf – пример реализации программы.


vegetablesList = [`cabbage`, `avocado`, `tomato`];
fruitsList = [`grapes`, `raspberry`, `coconut`];
vegetablesPrices = [8, 30, 10];
fruitsPrices = [20, 25, 50];

finalSum = 0;

do{
    period = prompt("Enter period: winter or summer.").replaceAll(" ", "").toLowerCase(); 
} while(period !== "winter" && period !== "summer");

if (period === "winter") {
    coefficient = 2;
} else {
    coefficient = 0.8;
}

do {
    category = prompt("Choose category in which you want to buy products: vegetables or fruits.").replaceAll(" ", "").toLowerCase();
} while(category !== "vegetables" && category !== "fruits");

if(category === "vegetables") {
    do {
        product = prompt("Choose product from category vegetables: cabbage, avocado or tomato.").replaceAll(" ", "").toLowerCase();
        vegetableType = vegetablesList.indexOf(product);
        priceOfProduct = vegetablesPrices[vegetableType];
    } while(product !== "cabbage" && product !== "avocado" && product !== "tomato");
} else {
    do {
        product = prompt("Choose product from category fruits: grapes, raspberry or coconut.").replaceAll(" ", "").toLowerCase();
        fruitType = fruitsList.indexOf(product);
        priceOfProduct = fruitsPrices[fruitType];
    } while(product !== "grapes" && product !== "raspberry" && product !== "coconut");
}

do {
    countOfProduct = parseInt(prompt(`Enter count of ${product}`).replaceAll(" ", ""));
} while(isNaN(countOfProduct) || countOfProduct <=1);

finalSum = countOfProduct * coefficient * priceOfProduct;

if (category === "vegetables") {
    productImg = `<img src="images/vegetables/${product}.svg" alt"${product}" width="100" height="100"></img>`; 
} else {
    productImg = `<img src="images/fruits/${product}.svg" alt"${product}" width="100" height="100"></img>`;
} 

document.write(`
  <div class="product" align="center">
        ${productImg}
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${countOfProduct}</b></p>
        <p>Selected period: <b>${period}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalSum}</b></p>
  </div>
`);