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













const form = document.querySelector('form');
const container = document.querySelector('.container');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

const fiForTable = {
    name: "Name",
    surname: "Surname",
    date: "Date",
    gender: "Gender",
    city: "City",
    adress: "Adress",
    lang: "Lang",
    
};

function renderAfterClick(obj) {
     const Trs = [];
        
    for (let key in fiForTable) {
        Trs.push(`<tr>
            <td>${fiForTable[key]}</td>
            <td>${obj[key]}</td>
        </tr>`);
    }

    container.innerHTML = `<table>${Trs.join('')}</table>`; 
};

//button.addEventListener('click', renderAfterClick);  

button.addEventListener('click', () => {
    const name = document.getElementById('name');
    console.log(name.value);

    const surname = document.getElementById('surname');
    console.log(surname.value);

    const date = document.getElementById('date');
    console.log(date.value);

    const gender = document.querySelectorAll('.gender');
    for(let i = 0; i < gender.length; i++) {
        if(gender[i].checked) { 
            console.log(gender[i].value);
        }
    }

    const city = document.getElementById('city');
    console.log(city.value);


    const adress = document.getElementById('adress');
    console.log(adress.value);

    const lang = document.querySelectorAll('.lang');
    for(let i = 0; i < lang.length; i++) {
        if(lang[i].checked) { 
            console.log(lang[i].value);
        }
    }

    const obj = {
        name: name.value,
        surname: surname.value,
        date: date.value,
        gender: gender.value,
        city: city.value,
        adress: adress.value,
        lang: lang.value,
    }; 

    renderAfterClick(obj);

});