const xml = new XMLHttpRequest(); // створюємо обєкт
xml.open('GET', 'request/fileB.json');
xml.send();  // відправляє запит на сервер

let parse = response => JSON.parse(response); // анонімна функція яка перетворює відповідь від сервера в обєкт

xml.addEventListener('readystatechange', () => {
    if(xml.readyState === 4 && xml.status ===200) {
        const response = parse(xml.response).data; // відповідь від сервера

        const wrapper = document.querySelector('.wrapper'); // створюємо змінну wrapper і присвоюємо їй елемент з класом wrapper 
        response.forEach(user => {                           // виводимо відповідь від сервера
             const div = document.createElement('div'); // створюємо елемент div
             const img = document.createElement('img'); // створюємо елемент img
             const h3 = document.createElement('h3'); // створюємо елемент h3
             const p = document.createElement('p'); // створюємо елемент p

            div.classList.add('card'); // додаємо клас card до елемента div
            p.classList.add('age'); // додаємо клас age до елемента p

            img.src = user.avatar; // додаємо src до елемента img
            h3.innerText = user.name; // додаємо текст до елемента h3
            p.innerText = `Hi, I'm ${user.age} years old`; // додаємо текст до елемента p

            div.append(img); // додаємо елемент img в div
            div.append(h3); // додаємо елемент h3 в div
            div.append(p); // додаємо елемент p в div
            wrapper.append(div); // додаємо елемент div в wrapper
          })
        }
    }) // слідкувати за дужкою фігурною та закриваючою, може привести до помилки 