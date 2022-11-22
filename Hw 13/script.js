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

// Chess

TRs = [];

for(tr = 1; tr <= 10; tr++) {
    TDs = [];

    for(td = 1; td <= 10; td++) {
        TDs.push(`<td></td>`)
    }
    TRs.push (`<tr>${TDs.join("")}</tr>`)
} 

document.write(`<table class="chess">${TRs.join("")}</table>`);


