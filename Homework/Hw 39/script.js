      // ДЗ 39. Слайдер базовий

// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. 
// Аналогічно з першим зображенням і кнопкою Prev.

const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
];

const img = document.querySelector('img');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let index = 0;

img.src = images[index];
btnPrev.disabled = true;
btnPrev.style.opacity = '0.5';

btnNext.addEventListener('click', () => {
    index++;
    img.src = images[index];
    btnPrev.disabled = false;
    btnPrev.style.opacity = '1';
    if (index === images.length - 1) {
        btnNext.disabled = true;
        btnNext.style.opacity = '0.5';
    }
});

btnPrev.addEventListener('click', () => {
    index--;
    img.src = images[index];
    btnNext.disabled = false;
    btnNext.style.opacity = '1';
    if (index === 0) {
        btnPrev.disabled = true;
        btnPrev.style.opacity = '0.5';
    }
});

