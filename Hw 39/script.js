// ДЗ 39. Слайдер базовий

// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.


document.querySelector('.next').addEventListener('click', next);
document.querySelector('.prev').addEventListener('click', prev);

let img = document.querySelector('.img');
let imgArr = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
let i = 0;

function next() {
    i++;
    if (i >= imgArr.length) {
        i = imgArr.length - 1;
    }
    img.src = imgArr[i];
}

function prev() {
    i--;
    if (i < 0) {
        i = 0;
    }
    img.src = imgArr[i];
}

