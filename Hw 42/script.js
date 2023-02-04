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

form = document.forms[0];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let data = new FormData(form);
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    for (let [key, value] of data.entries()) {
        let td = document.createElement('td');
        td.innerText = value;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    document.body.appendChild(table);
});

