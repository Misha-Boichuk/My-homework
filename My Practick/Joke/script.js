// <<22>>  04/02/2023 1:29:37

const form = document.querySelector('.form');  

form.addEventListener('submit', e => { 
    e.preventDefault();

    const choosenButton = document.querySelector('input[name=jokeType]:checked').value;   // привяка до кнопки з іменем jokeType
    console.log(choosenButton);
});

fetch("htpps://api.chucknorris.io/jokes/random")
   .then(data => data.json())
    .then(response => console.log(response))
