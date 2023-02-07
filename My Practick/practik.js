// callback - функція яка викликається після завершення виконання функції

function requestData(method, action, callback) {
    const xml = new XMLHttpRequest();
    xml.open(method, action);
    xml.send();  
   
    let parse = response => JSON.parse(response); 

    xml.addEventListener('readystatechange', () => {
        if(xml.readyState === 4 && xml.status === 200) {              
            const  response = parse(xml.response).data; 

           callback(response); 
        }
    })

}

function renderElement(response) {
    response.forEach(item => console.log(item));
}

function renderFrends(response) {
    const wrapper = document.querySelector('.wrapper');  
    response.forEach(user => { 
         const div = document.createElement('div'); 
         const img = document.createElement('img'); 
         const h3 = document.createElement('h3'); 
         const p = document.createElement('p'); 

        div.classList.add('card'); 
        p.classList.add('age'); 

        img.src = user.avatar; 
        h3.innerText = user.name; 
        p.innerText =`Hi, I'm ${user.age} years old !!!!`; 

        div.append(img); 
        div.append(h3); 
        div.append(p); 
        wrapper.append(div);
      });

}

requestData('GET', 'request/fileA.json', renderElement);
requestData('GET', 'request/fileB.json', renderFrends);