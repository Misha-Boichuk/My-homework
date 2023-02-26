        //ДЗ 37. Голосування
// Створити програму для відображення результатів голосування.
// З наступними умовами:

//Як варіанти відповіді - смайлики. За замовчуванням, 5шт
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.


const smile = document.querySelectorAll('.smile');

    smile.forEach(el => {
        let counter = 1;
        el.addEventListener('click', (e) => {
            e.target.nextElementSibling.innerText = counter++;
        });
});