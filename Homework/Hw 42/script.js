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
//     Кнопка “ Зберегти ”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

document.querySelector('button').addEventListener('click', e => {
    e.preventDefault();

    const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = document.querySelectorAll('input[name="languages"]:checked');
    
    const languagesArr = [];
        for (let i = 0; i < languages.length; i++) {
            languagesArr.push(languages[i].value);
        }

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <td>First name</td>
            <td>${firstname}</td>
        </tr>
        <tr>
            <td>Last name</td>
            <td>${lastname}</td>
        </tr>
        <tr>
            <td>Birthday</td>
            <td>${birthday}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>${gender}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>${city}</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>${address}</td>
        </tr>
        <tr>
            <td>Languages</td>
            <td>${languagesArr.join(', ')}</td>
        </tr>
    `;
    document.body.replaceWith(table);
});