// ДЗ 13. Gaming cards ♠️♣️♥️♦️
// Рисуем колоду карт, которая состоит из:
// карт номиналом 2-10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей
// В макете используется:
// Шрифт https://fonts.google.com/specimen/Nerko+One
// Зеленый цвет доски #55aa55
// Черный цвет текста #353c4d
// Иконки 4-x мастей и jack, queen, king в архиве images.zip
// Все теги рендерим с помощью js.
// Внешний вид задания НЕ важен, важен только JS-код))

card = [];
number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "T"];
suit = [`clubs`, `spades`, `diamond`, `hearts`];
icon = [`jack`, `queen`, `king`, `clubs`];
image = "";
br = 9;

for(let j = 0; j < 13; j++) {
    if (j === br) {
        br++;
        image = `<img class="person" src="images/${icon[br - 10]}.svg" alt="${icon[br - 10]}"></img`;
    }
    for ( let i = 0; i < 4; i++) {
        if(j === 12) {
            image = `<img class="person" src="images/${suit[i]}.svg" alt="${suit[i]}></img>`;
        }
        card.push(`
        <div class="card">
           <div class="card_info">${number[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div>${image}
           <div class="card_info">${number[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div> 
        </div>`)
    }
}
document.write(`<div class="wrapper">${card.join("")}</div>`)