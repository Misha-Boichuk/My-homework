///  ДЗ 32. div - привид
// Є текстове поле на сторінці. 
// Під час фокусування на цьому полі збоку з'являється <div>. 
// При пропажі фокусу - <div> так само пропадає


const body = document.body;

const childArr = [...body.children];

console.log(body.children);

const div = document.createElement('div');

div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';
div.style.position = 'absolute';
div.style.top = '0';
div.style.left = '10';

body.appendChild(div);
const input = document.createElement('input');

input.style.width = '100px';

body.appendChild(input);

input.addEventListener('focus', () => {
    div.style.display = 'block';
});

input.addEventListener('blur', () => {
    div.style.display = 'none';
});
