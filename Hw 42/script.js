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

// // робота Олексія 
// const saveButton = document.querySelector('#button');
//        table = document.querySelector('.table');
//        container = document.querySelector('#cont');

// saveButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     getDataFomForm();
// });

// function getDataFomForm() {
//     const firstName = document.querySelector('#firt-name').value,
//     secondName = document.querySelector('#second-name').value,
//     birthDate = document.querySelector('#date').value,
//     gender = document.querySelector('input[name="gender"]:checked').value,
//     city = document.querySelector('#city').value,
//     adress = document.querySelector('#adress').value,
//     lang = document.querySelector('#item-form'), 
//     Language = lang.querySelectorAll('input[name="language"]:checked');

//     const newObject = {
//         'First name': firstName,
//         'Second name': secondName,
//         'Birth date': birthDate,
//         Gender: gender,
//         City: city,
//         Adress: adress,
//         Language: [],
//     };

//     Language.forEach(element => {
//         newObject.Language.push(element.value);
//     });          ///            ////

//     renderForm(newObject);
//     table.classList.remove('d-none');
//     container.classList.add('d-none');
// }

// function renderForm(obj) {
//     for (let key in obj) {
//         const tr = document.createElement('tr');
//         const td1 = document.createElement('td');
//         const td2 = document.createElement('td');

//         td1.innerText = key;
//         td2.innerText = obj[key];

//         tr.append(td1);
//         tr.append(td2);

//         table.append(tr);
//     }
// }