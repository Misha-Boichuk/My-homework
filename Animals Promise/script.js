const parse = response => JSON.parse(response);

const controller = (method, action) => {
    const xml = new  XMLHttpRequest();
    xml.open(method, action);
    xml.send();

    return new Promise((resolve, reject) => {
        xml.addEventListener("readystatechange", () => {
            if (xml.readyState === 4) {
                xml.status>= 200 && xml.status < 400 
                ? resolve(parse(xml.response))
                : reject(xml.status);
            }
        });
    });
};

// controller("GET", "json/animals.json")
//     .then(data => {
//         data.animals.forEach(animals => {
//             controller("GET", `json/${animals}.json`)   // поганий код та нереалістичний
//                 .then(data => console.log(data.name))
//                 .catch(err => console.log(err));
//         })
//     })
//     .catch(err => console.log(err));

// controller("GET", "json/animals.json")
// //     .then(data => {
// //         return data.animals;   // запис поганий та нереалиний багат then !!!
//     })

// .then(data => console.log("GET", `json/${data[0]}.json`))
// .then(data => console.log("GET", `json/${data[1]}.json`))
// .then(data => console.log("GET", `json/${data[2]}.json`))
// .catch(err => console.log(err));
    

// Promise.all([
//     controller("GET", "json/dog.json"),
//     controller("GET", "json/cat.json"),
//     controller("GET", "json/fox.json"),
// ])
//     .then(data => data.forEach(animal => console.log(animal.name)))
//     .catch(err => console.log(err)); // такий самий метод як вище тільки використовується Promise.all але не змінюється порядок виводу імен 

//////////////////////////////////////////

controller("GET", "json/animals.json")
    .then(data => {
         Promise.all(data.animals.map(animals => controller("GET", `json/${animals}.json`)))
            .then(data => data.forEach(animal => {
                const p = document.createElement("p");
                p.innerText = animal.name;
                document.body.append(p);  // виводить імена на сторінку не змінюючи іх порядок!
            }))
        
    })
    .catch(err => console.log(err));