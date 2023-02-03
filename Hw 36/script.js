   //ДЗ 36. Shapes ❤️🟢🔷

// на странице находятся элементы:
// div - фигура, которая может принимать какие-то формы
// select - выбрать тип фигуры (квадрат, прямоугольник, круг). 
// При изменении значения в нем, меняется фигура
// input для выбора цвета. При его изменении меняется цвет фигуры

const div = document.querySelector("div");
const form = document.querySelector("form");
const color = document.getElementById("color");

form.addEventListener("click", () => {

    const select = document.querySelector("select").value;
    div.className="";
    div.classList.add(`${select}`);  
});

color.addEventListener("change", () => {
    div.style.backgroundColor = color.value; 
});    