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