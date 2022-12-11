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
// TRs = [];
// alphabet = "abcdefgh";
// figures = ["rook", "horse", "bishop", "queen", "king"];
// figures = figures.concat(figures.slice(0,3).reverse());

// for(tr = 10; tr >= 1; tr--) {
//     color = tr >= 4 ? "black" : "white";
//     TDs = [];

//     for(td = 1; td <= 10; td++) {
//         data = "";
//         if((tr === 1 || tr === 10) && td !== 1 && td !== 10) {
//             data = alphabet[td -2];
//         }
//         if((td === 1 || td === 10) && tr !== 1 && tr !== 10) {
//             data = tr - 1;
//         }
//         if((tr === 3 || tr === 8) && td !== 1 && td !== 10) {
//             data = `<img src="images/chass/${color}/pawn.svg">`
//         }
//         if((tr === 2 || tr === 9) && td !== 1 && td !== 10) {
//             data = `<img src="images/chass/${color}/${figures[td-2]}.svg">`
//         }
      
//         TDs.push(`<td>${data}</td>`)
//     }
//     TRs.push(`<tr>${TDs.join("")}</tr>`)
// } 
// document.write(`<table class="chess">${TRs.join("")}</table>`);

for (i = 0; i < suits.length; i++) { 
    cards.push(` 
    <div class="card card--person"> 
    <div class="card__info"> 
        T  
        <img src="images/${suits[i]}.svg" alt="${suits[i]}"> 
    </div> 
    <img class="person" src="images/${suits[i]}.svg" alt="${suits[i]}"> 
    <div class="card__info"> 
        T  
        <img src="images/${suits[i]}.svg" alt="${suits[i]}"> 
    </div> 
    </div> 
    `);
}