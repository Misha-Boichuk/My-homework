const parse = response => JSON.parse(response);

const controller = (method, action) => {
  const xhr = new XMLHttpRequest();
    xhr.open(method, action);
    xhr.send();

    return new Promise((resolve, reject) => {
        xhr.addEventListener("readystatechange", () => {
            if(xhr.readyState === 4) {
                xhr.status >= 200 && xhr.status < 400 
                ? resolve(parse(xhr.response)) 
                : reject(xhr.status);
            }  
        });
    });
};



controller('GET', 'json/animals.json')
    //.then(data => console.log(data)) // {animals: Array(3)}
    .then(data =>
        data.animals.forEach(animals => {
            controller('GET', `json/${animals}.json`)
                .then(data => console.log(data.name)) // cat, dog, bird
                .catch(error => console.log(error));
            
        })
    )
    .catch(error => console.log(error)); 
