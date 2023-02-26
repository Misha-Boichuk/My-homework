    // ДЗ 12. Print right arrays
// Dано:
// sports = [
// 	['skier','⛷'],
// 	['snowboarder','🏂'],
// 	['apple','🍎'],
// 	['hockey','🏒'],
// 	['ice skate','⛸'],
// 	['swimmer','🏊'],
// 	['surfer','🏄‍'],
// 	['watermelon','🍉'],
// 	['lemon','🍋'],
// 	['rowboat','🚣'],
// 	['bicyclist','🚴‍']
// ];

// Задача:
// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.


sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
]

fruits = [];

summer = sports.slice(5, 11);
winter = sports.slice(0, 5);

fruits = fruits.concat(summer.splice(2, 2));
fruits = fruits.concat(winter.splice(2, 1));

for (i = 0; i < summer.length; i++) {
    if (summer[i] [0] === 'skier') {
        console.log("*** Winter sports ***");
    }
    console.log(summer[i].join(": "));
	if(summer[i] [0] === "swimmer") {
		console.log("***Summer sports***");
	}
}
console.log(fruits);