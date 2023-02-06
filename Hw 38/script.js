//ДЗ 38. Реалізувати подобу інтернет-магазину.

// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

const product = [
    {
        name: "Laptop",
        img: ".jpg",
        products: [  
            {
                name: "Laptop 1", 
                price: 1000,
                descraption: "The company itself is a very successful company. Anyone, what.",
                img: ".jpg",
            },
            {
                name: "Laptop 2",
                price: 2000,
                descraption: "The company itself is a very successful company. Anyone, what.",
                img: ".jpg",
            },
        ]

    },
    {
        name: "Phone",
        img: ".jpg",
        products: [
            {
                name: "Phone 1",
                price: 500,
                descraption: "The company itself is a very successful company. Anyone, what.",
                img: ".jpg",
            },
            {
                name: "Phone 2",
                price: 700,
                img: ".jpg",
                descraption: "The company itself is a very successful company. Anyone, what.",
            } 
        ]
    },
    {   
        name: "Tablet",
        img: ".jpg",
        products: [
             {
                name: "Tablet 1",
                price: 300,
                img: ".jpg",
                descraption: "The company itself is a very successful company. Anyone, what.",
            },
            {
                name: "Tablet 2",
                price: 400,
                img: ".jpg",
                descraption: "The company itself is a very successful company. Anyone, what.",
            }   
        ]
    }         
]

const leftBlock = document.getElementById('leftBlock');
const centerBlock = document.getElementById('centerBlock');
const rightBlock = document.getElementById('rightBlock');

const categories = product;

const createCategory = (category) => {
    const categoryItem = document.createElement('div');
    categoryItem.classList.add('category-item');
    categoryItem.innerText = category.name;
    categoryItem.addEventListener('click', () => {
        createProduct(category.products);
    });
    leftBlock.appendChild(categoryItem);
}

const createProduct = (products) => {
    centerBlock.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerText = product.name;
        productItem.addEventListener('click', () => {
            createProductInfo(product);
        });
        centerBlock.appendChild(productItem);
    });
}

const createProductInfo = (product) => {
    rightBlock.innerHTML = '';
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.innerHTML = 
      `<img src="${product.img}" alt="${product.name}">
       <h3>${product.name}</h3>
       <p>${product.descraption}</p>
       <p>${product.price}</p>
       <button class="buy-btn">Купити</button>
      `;

    const buyBtn = productInfo.querySelector('.buy-btn');
    buyBtn.addEventListener('click', () => {
        alert('Товар куплений');
        createCategory(categories);
    });
    rightBlock.appendChild(productInfo);
}

createCategory(categories);