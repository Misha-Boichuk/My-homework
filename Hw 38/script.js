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
