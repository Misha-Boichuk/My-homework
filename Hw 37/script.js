//ДЗ 37. Голосування
// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const smile = document.querySelectorAll('.smile');
const counter = document.querySelectorAll('.counter');
const smileArr = Array.from(smile);
const counterArr = Array.from(counter);

smileArr.forEach((item, index) => {
    item.addEventListener('click', () => {
        counterArr[index].textContent++;
    })
})


