// const xml = new XMLHttpRequest(); // створюємо обєкт
// xml.open('GET', 'request/fileB.json');
// xml.send();  // відправляє запит на сервер

// let parse = response => JSON.parse(response); // анонімна функція яка перетворює відповідь від сервера в обєкт

// xml.addEventListener('readystatechange', () => {
//     if(xml.readyState === 4 && xml.status ===200) {
//         const response = parse(xml.response).data; // відповідь від сервера

//         const wrapper = document.querySelector('.wrapper'); // створюємо змінну wrapper і присвоюємо їй елемент з класом wrapper 
//         response.forEach(user => {                           // виводимо відповідь від сервера
//              const div = document.createElement('div'); // створюємо елемент div
//              const img = document.createElement('img'); // створюємо елемент img
//              const h3 = document.createElement('h3'); // створюємо елемент h3
//              const p = document.createElement('p'); // створюємо елемент p

//             div.classList.add('card'); // додаємо клас card до елемента div
//             p.classList.add('age'); // додаємо клас age до елемента p

//             img.src = user.avatar; // додаємо src до елемента img
//             h3.innerText = user.name; // додаємо текст до елемента h3
//             p.innerText = `Hi, I'm ${user.age} years old`; // додаємо текст до елемента p

//             div.append(img); // додаємо елемент img в div
//             div.append(h3); // додаємо елемент h3 в div
//             div.append(p); // додаємо елемент p в div
//             wrapper.append(div); // додаємо елемент div в wrapper
//           })
//         }
//     }) 

///////////////  Тепер ствоворимо 2 запити на сервер і виведемо їх в один wrapper ///////////////

function requestData(method, action, callback) {
    const xml = new XMLHttpRequest();
    xml.open(method, action);
    xml.send();

     let parse = response => JSON.parse(response); 

    xml.addEventListener('readystatechange', () => {
        if(xml.readyState === 4 && xml.status ===200) {
            const response = parse(xml.response).data; 
            callback(response);
        }
    })
}

function renderElement(response) {
  response.array.forEach(item => console.log(item));
}
 

function renderFriends(response) {
    const wrapper = document.querySelector('.wrapper');

    response.forEach(user => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        div.classList.add('card');
        p.classList.add('age');

        img.src = user.avatar;
        h3.innerText = user.name;
        p.innerText = `Hi, I'm ${user.age} years old`;

        div.append(img);
        div.append(h3);
        div.append(p);
        wrapper.append(div);
    })
  }
requestData('GET', 'request/fileA.json', renderElement);
requestData('GET', 'request/fileB.json', renderElement);
