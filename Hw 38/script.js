//ДЗ 38. Реалізувати подобу інтернет-магазину.

// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

const store = {
    categories: {
        'Phonses': {
            products : [
                {
                    name: 'Product',
                    descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                    photo: 'https://www.apple.com/v/iphone/home/ah/images/overview/compare/compare_iphone_12__d2x2q2z2x2y2.jpg',
                    price: 1000,
                },
                {
                    name: 'Product',
                    descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                    photo: 'https://www.apple.com/v/iphone/home/ah/images/overview/compare/compare_iphone_10__d2x2q2z2x2y2.jpg',
                    price: 700,
                },
                {
                    name: 'Product',
                    descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                    photo: 'https://www.apple.com/v/iphone/home/ah/images/overview/compare/compare_iphone_11__d2x2q2z2x2y2.jpg',
                    price: 800,
                },
            ]
        },  
        'Laptops': {
            products : [
                    {  
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        photo: 'https://www.apple.com/v/mac/home/ah/images/overview/macbook_pro__d2x2q2z2x2y2.jpg',
                        price: 2000,
                    },
                    {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        photo: 'https://www.apple.com/v/mac/home/ah/images/overview/macbook_air__d2x2q2z2x2y2.jpg',
                        price: 1500,
                    },
                    {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        photo: 'https://www.apple.com/v/mac/home/ah/images/overview/macbook_m1__d2x2q2z2x2y2.jpg',  
                        price: 800,
                    }   
                ]
            },
        'Tablets': {
            products : [
                   {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        photo: 'https://www.apple.com/v/ipad/home/ah/images/overview/compare_ipad_air__d2x2q2z2x2y2.jpg',
                        price: 1000,
                   },
                     {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        photo: 'https://www.apple.com/v/ipad/home/ah/images/overview/compare_ipad_pro__d2x2q2z2x2y2.jpg',
                        price: 1500,
                     },
                     {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        photo: 'https://www.apple.com/v/ipad/home/ah/images/overview/compare_ipad_mini__d2x2q2z2x2y2.jpg',
                        price: 800,
                     }
               ]
            }       
        }  
    }

const body = document.querySelector('body');
const nav = document.createElement('nav');
const main = document.createElement('div');
const aside = document.createElement('div');

body.append(nav, main, aside);

nav.classList.add('nav');
main.classList.add('main');
aside.classList.add('aside');

const navList = document.createElement('ul');
nav.append(navList);

for (let key in store.categories) {
    const navItem = document.createElement('li');
    navItem.textContent = key;
    navList.append(navItem);
}

const mainList = document.createElement('ul');
main.append(mainList);

navList.addEventListener('click', (event) => {
    mainList.innerHTML = '';
    const category = event.target.textContent;
    const products = store.categories[category].products;
    for (let product of products) {
        const mainItem = document.createElement('li');
        mainItem.textContent = product.name;
        mainList.append(mainItem);
    }
})

mainList.addEventListener('click', (event) => {
    aside.innerHTML = '';
    const product = event.target.textContent;
    for (let key in store.categories) {
        const products = store.categories[key].products;
        for (let item of products) {
            if (item.name === product) {
                const asideItem = document.createElement('div');
                asideItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.descraption}</p>
                <img src="${item.photo}" alt="${item.name}">
                <p>${item.price}</p>
                <button>Buy</button>
                `
                aside.append(asideItem);
            }
        }
    }
})

// aside.addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         alert('Product bought');
//     }
// })

