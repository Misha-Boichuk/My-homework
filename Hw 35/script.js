//ДЗ 35. Перехід за посиланням

// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const btn = document.querySelectorAll(".btn");

function renderAfterClick() {
    console.log("Btn cliked");
}

btn.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault(); 
        renderAfterClick(); 
    });
});      


                 
            











   

  

    



    