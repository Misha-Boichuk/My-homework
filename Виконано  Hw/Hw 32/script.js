///  ДЗ 32. div - привид
// Є текстове поле на сторінці. 
// Під час фокусування на цьому полі збоку з'являється <div>. 
// При пропажі фокусу - <div> так само пропадає

const input = document.querySelector('input');
const div = document.querySelector('div');

input.addEventListener('focus', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    console.log(firstName); 
    console.log(lastName);  
});   