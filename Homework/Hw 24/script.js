     // ДЗ 24. Heroes render 👩🏻‍🎤🧑🏻‍🎤
// Дано два массива marvelHeroes и dcHeroes:

// let marvelHeroes = [
// 	{
// 		name: "Thor"
// 	},
// 	{
// 		name: "Spider Man"
// 	}
// ];

// let dcHeroes = [
// 	{
// 		name: "Superman"
// 	},
// 	{
// 		name: "Batman"
// 	},
// 	{
// 		name: "Deadpool"
// 	}
// ];

// И папка с картинкам images, в которой находятся две папки с иконками супер-героев (см. в Прикрепленных материалах): marvel dc

// Задача:
// В Array.prototype добавить свойство с названием heroesRender в значении которого находится функция.
// Даная функция может вызываться в контексте любого массива и в качестве входящего аргумента принимает название папки ('dc', 'marvel'), 
// с которой будут подтягиваться иконки супер-героев этого массива.

// Пример:
// dcHeroes.heroesRender('dc');
// marvelHeroes.heroesRender('marvel');
// Функция возвращает таблицу, в которой выводится информация по каждому из вложенных объектов.
//  Строка каждого объекта имеет вид:
	// <tr>
	// 	<td>Thor</td>
	// 	<td>
	// 		<img src="images/marvel/thor.svg">
	// 	</td>
	// </tr>
// В первом td выводим свойство name объекта.
// Во втором td выводим картинку, путь к которой включает название папки, 
// которую передаем при вызове функции heroesRender().
//   В данном примере вывода папка называется marvel и вызов функции будет 
//   такой marvelHeroes.heroesRender('marvel'); Название самой картинки – это 
//   свойство name объекта, почищенное от пробелов и приведенное к нижнему регистру.
//   Например, для {name: Spider Man} иконка будет иметь название spiderman.svg

// Пример вывода таблицы:
// <table>
// 		<thead>
// 			<tr>
// 				<th>Name</th>
// 				<th>Icon</th>
// 			</tr>
// 		</thead>
// 		<tbody>
// 			<tr>
// 				<td>Thor</td>
// 				<td>
// 					<img src="images/marvel/thor.svg">
// 				</td>
// 			</tr><tr>
// 				<td>Spider Man</td>
// 				<td>
// 					<img src="images/marvel/spiderman.svg">
// 				</td>
// 			</tr>
// 		</tbody>
// 	</table>

let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];
	
Array.prototype.heroesRender = function(name) {
	let reasult = `
		<table>
			<thead>	
				<tr>
					<th>Name</th>
					<th>Icon</th>
				</tr>	
			</thead>
				<tbody>`;
				
			for (let i = 0; i < this.length; i++) {
				reasult += `<tr>
								<td>${this[i].name}</td>
								<td>
									<img src="images/${name}/${this[i].name.toLowerCase().replace(' ', '' )}.svg">
								</td>
							</tr>`;
	}	
	reasult += `</tbody>
		</table>`;
	return reasult;
}

document.write(marvelHeroes.heroesRender('marvel'));
document.write(dcHeroes.heroesRender('dc'));