// ДЗ 26. Render products
//Дано три массива с объектами:

// let kitchenProducts = [
// 	{
// 		type: 'grater',
// 		price: 10
// 	},
// 	{
// 		type: 'pastry-bag',
// 		price: 25
// 	},
// 	{
// 		type: 'scale',
// 		price: 5
// 	},
// 	{
// 		type: 'whisk',
// 		price: 15
// 	}
// ];

// let devicesProducts = [
// 	{
// 		type: 'desktop',
// 		price: [100,1000]
// 	},
// 	{
// 		type: 'laptop',
// 		price: [50,1500]
// 	},
// 	{
// 		type: 'smartphone',
// 		price: [80,2000]
// 	},
// 	{
// 		type: 'tablet',
// 		price: [20,1300]
// 	}
// ];

// let cosmeticsProducts = [
// 	{
// 		type: 'blush',
// 		price: 100
// 	},
// 	{
// 		type: 'eyeshadow',
// 		price: 50
// 	},
// 	{
// 		type: 'lipstick',
// 		price: 80
// 	},
// 	{
// 		type: 'nail-polish',
// 		price: 200
// 	},
// 	{
// 		type: 'perfume',
// 		price: 300,
// 	}
// ];

// Задача:

// Создать функцию-конструктор Product, которая принимает на вход аргументы category, type, price и присваивать их полям объекта c соответствующим названием ключа.
// Каждому объекту созданному с помощью функции-конструктор Product доступна функция render, которая возвращает строку вида: 

// `<tr>
// 	<td><img src="images/kitchen/grater.svg" alt="grater" width="50" height="50"></td>
// 	<td>grater</td>
// 	<td>10 USD</td>
// </tr>`

// Все заданные продукты создаем с помощью функции-конструктор Product и для всех вызываем метод render().

// В результате необходимо отрендерить на странице таблицу с выводом данных о всех продуктах.

// Пример вывода прикреплен products.png

// Исходные картинки находятся в прикрепленном архиве images.zip

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

Array.prototype.renderProducts = function(folder) {
    const Trs = this
	  .map(function(product) {
         return `
            <tr>
               <td><img src="images/${folder}/${product.type}.svg" alt="${product.type}" width="50"></td>
               <td>${product.type}</td>
               <td>${product.price}</td>
            `
 }).join("");

document.write(`
    <table> 
        <thead>
            <tr>
                <th>Images</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
		<tbody>${Trs}</tbody>  
    </table>
          
`);
}

kitchenProducts.renderProducts("kitchen");
cosmeticsProducts.renderProducts("cosmetics");
devicesProducts.renderProducts("devices");