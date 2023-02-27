// ДЗ 41. Модифікувати програму інтернет-магазин

// Робимо на підставі минулого дз.

// 1. В інформації товару - кнопка "купити".
//    При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
//    ПІБ покупця
//    Місто (вибір зі списку)
//    Склад Нової пошти для надсилання
//    Післяплати або оплати банківської картки
//    Кількість продукції, що купується

//    Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені.
//    Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)


const store = {
    categories: {
        'Phonses': {
            products : [
                {
                    name: 'Product',
                    descraption: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetti sheets containing Lorem Ipsum passages, and more recently with desktop publishing som',
                    photo: 'images/happy.png width="100"',
                    price: '$1000',
                },
                {
                    name: 'Product',
                    descraption: 'Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forrem ipsumill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                    //photo: 'images/iphone/11.jpg',
                    price: '$700',
                },
                {
                    name: 'Product',
                    descraption: 'Lorem Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default  a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                    //photo: 'images/iphone/10.jpg',
                    price: '$800',
                },
            ]
        },  
        'Laptops': {
            products : [
                    {  
                        name: 'Product',
                        descraption: 'Lorem Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forl uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometime and the like)..',
                        //photo: 'images/laptop/black.jpg',
                        price: '$2000',
                    },
                    {
                        name: 'Product',
                        descraption: 'Lorem Content here, content here, making it look like readable English. Many Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy. metimes by accident, sometimes on purpose (injected humour and the like).' ,
                        price: '$1500',
                    },
                    {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        //photo: 'images/laptop/red.jpg',
                        price: '$800',
                    }   
                ]
            },
        'Tablets': {
            products : [
                   {
                        name: 'Product',
                        descraption: 'Lorem Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose .',
                        //photo: 'images/tablet/tab1.jpg',
                        price: '$500',
                   },
                     {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sContent here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their.',
                        //photo: 'images/tablet/tab2.jpg',
                        price: '$400',
                     },
                     {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sContent here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their.',
                        //photo: 'images/tablet/tab3.jpg',  
                        price: '$300',
                     }
               ]
            }       
        }  
    }

const body = document.querySelector('body');
const nav = document.createElement('nav');
const mainDiv = document.createElement('div');
const divPage = document.createElement('div');    

mainDiv.classList.add('categories');
divPage.classList.add('product');

function  addNavigation(category){
    const navItem = document.createElement('div');
    navItem.classList.add('nav-item');
    navItem.textContent = category;
    navItem.addEventListener('click', () => {
        productList(store.categories[category].products);
    });
    nav.appendChild(navItem);

}

function productList(products){

    mainDiv.innerHTML = '';
    divPage.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.addEventListener('click', () => {
            productInfo(product);
        });
        const productImg = document.createElement('img');
            productImg.classList.add('product-img');
            productImg.src = product.photo;
            const productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.textContent = product.price;
            productItem.append(productImg);
            productItem.append(productPrice);
            mainDiv.append(productItem);
    });
}

function productInfo(product){

    mainDiv.innerHTML = '';
    divPage.innerHTML = '';

    const productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.src = product.photo;
    const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.textContent = product.price;
    const productDescraption = document.createElement('div');
        productDescraption.classList.add('product-descraption');
        productDescraption.textContent = product.descraption;
    const productBuy = document.createElement('button');
        productBuy.classList.add('product-buy');
        productBuy.textContent = 'Купити';
        productBuy.addEventListener('click', () => {
            buyProduct(product);
        });
    divPage.append(productImg);
    divPage.append(productPrice);
    divPage.append(productDescraption);
    divPage.append(productBuy);
}
 
function buyProduct(product){
    divPage.innerHTML = '';
    const productBuy = document.createElement('div');
        productBuy.classList.add('product-buy');
        productBuy.textContent = `Ви купили ${product.name}`;
    divPage.append(productBuy);
}

for (const category in store.categories) {
    addNavigation(category);
}

body.append(nav);
body.append(mainDiv);
body.append(divPage);




// function buyProduct(product){
//     divPage.innerHTML = '';
//     alert (`Ви купили ${product.name}`);
// }
// for (const category in store.categories) {
//     addNavigation(category);
// }

// body.append(nav);
// body.append(mainDiv);
// body.append(divPage);
