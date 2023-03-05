    // ДЗ 41. Модифікувати програму інтернет-магазин

//  Робимо на підставі минулого дз. В інформації товару - кнопка "купити".
// 1 При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
//     ПІБ покупця
//     Місто (вибір зі списку)
//     Склад Нової пошти для надсилання
//     Післяплати або оплати банківської картки
//     Кількість продукції, що купується
//     Коментар до замовлення
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
                    photo: 'images/iphone/12.jpg',
                    price: '$1000',
                },
                {
                    name: 'Product',
                    descraption: 'Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forrem ipsumill uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                    photo: 'images/iphone/11.jpg',
                    price: '$700',
                },
                {
                    name: 'Product',
                    descraption: 'Lorem Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default  a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                    photo: 'images/iphone/10.jpg',
                    price: '$800',
                },
            ]
        },  
        'Laptops': {
            products : [
                    {  
                        name: 'Product',
                        descraption: 'Lorem Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search forl uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometime and the like)..',
                        photo: 'images/laptop/red.jpg',
                        price: '$2000',
                    },
                    {
                        name: 'Product',
                        descraption: 'Lorem Content here, content here, making it look like readable English. Many Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search will uncover many web sites still in their infancy. metimes by accident, sometimes on purpose (injected humour and the like).' ,
                        photo: 'images/laptop/gray.jpg',
                        price: '$1500',
                    },
                    {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
                        photo: 'images/laptop/black.jpg',
                        price: '$800',
                    }   
                ]
            },
        'Tablets': {
            products : [
                   {
                        name: 'Product',
                        descraption: 'Lorem Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose .',
                        photo: 'images/tablet/tab2.jpg',
                        price: '$500',
                   },
                     {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sContent here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their.',
                        photo: 'images/tablet/tab1.jpg',
                        price: '$400',
                     },
                     {
                        name: 'Product',
                        descraption: 'Lorem ipsum dolor sContent here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their.',
                        photo: 'images/tablet/tab3.jpg',  
                        price: '$300',
                     }
               ]
            }       
        }  
    }

    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    const mainDiv = document.querySelector('.categories');
    const divPage = document.querySelector('.product');
    const form = document.querySelector('.product form');
    
    function  addNavigation(categories){
        const navUl = document.createElement('ul');
            navUl.classList.add('nav-ul');
            nav.append(navUl);
        for (let key in categories){
            const navLi = document.createElement('ul');
                navLi.classList.add('nav-li');
                navLi.textContent = key;
                navLi.addEventListener('click', () => {
                productList(categories[key].products);
            });
            navUl.append(navLi);
        }
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
            productBuy.textContent = 'Buy product';
            productBuy.addEventListener('click', () => {
               createNewOrder(product );
                
            });
        divPage.append(productImg);
        divPage.append(productPrice);
        divPage.append(productDescraption);
        divPage.append(productBuy);
    }
 
    function createNewOrder(){

        const form = document.querySelector('.d-none');
            form.classList.remove('d-none');
            form.classList.add('d-block');

        const button = document.createElement('button');
                button.classList.add('form-button');
                button.textContent = 'Send order'
                button.addEventListener('click', () => {
                   sendOrder();        
                });
            form.append(button);


    }
        
    function sendOrder(){     /// не працює
        const form = document.querySelector('.d-block');
            form.classList.remove('d-block');
           form.classList.add('d-none');

           const requiredFields = document.querySelectorAll('input, city, payment, textarea');
              
           const order = {};
   
           let isValid = true;
   
           requiredFields.forEach(field => {
           
               if (field.value === '') {
                   isValid = false;
                   field.classList.add('error');
               } else {
                   field.classList.remove('error');
                   order[field.name] = field.value;
               }
    
               if (city.value === '') {
                   isValid = false;
                   city.classList.add('error');
                } else {
                    city.classList.remove('error');
                    order[city.name] = city.value;
                }    
           });


           
   

    

         mainDiv.remove();
         divPage.remove();
         form.remove();
         nav.remove(); 


        renderTableFromData(order);
    }

    function renderTableFromData(data) {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
    
        for (const key in data) {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            const td = document.createElement('td');
    
            th.innerText = key;
            td.innerText = data[key];
    
            tr.append(th);
            tr.append(td);
    
            tbody.append(tr);
        }
    
        table.append(tbody);
        body.append(table);
    }

addNavigation(store.categories);