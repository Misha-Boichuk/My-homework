// ДЗ 42. Форма для реєстрації
// Реалізовуємо форму для реєстрації.
// Поля:
//     Ім'я, Прізвище (Текстові поля)
//     Дата народження (Текстове поле)
//     Стать (radio)
//     Місто (select)
//     Адреса (textarea)
//     Мови, якими володіє (checkbox)
//     ...
//     Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.


const form = document.forms['form'];
const btn = document.getElementById('btn');
const table = document.getElementById('table');
const tbody = document.getElementById('tbody');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const formValues = [...form.elements].filter(el => el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT');
    const tr = document.createElement('tr');
    formValues.forEach(el => {
        const td = document.createElement('td');
        td.innerText = el.value;
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
    table.appendChild(tbody);
    form.reset();
})

