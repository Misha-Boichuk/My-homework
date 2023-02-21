// 25 Заняття  - REST API продовження 

// IMAGE BASE 64 

const getBase64 = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};


// API 
const API = 'https://63ed161bf1ec53805dd8d642.mockapi.io';

async function controller(mathod, action, body) {
    const URL = `${API}/${action}`;
    const params = {
        mathod,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if(body) params.body = JSON.stringify(body);

    const response = await fetch(URL, params); // 1. fetch - запит на сервер не працює  ??
    const data = await response.json();
    
    return data;
}
// login USER

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', async e => {
    e.preventDefault();
   
    const userFind = await getUser(); 

    if(userFind) {
        renderUser(userFind); 
    } else {
        alert('Email or pasword is wrong!!!');
    }
}) 

async function getUser() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await controller('GET', '/users');
        const userFind = response.find(user => user.email === email && user.password === password);
        
        return userFind;  
    }

  /// RENDER USER  

function renderUser(user) {
    const userContainer = document.getElementById("userInfo");

    const card = document.createElement('div');
    const div = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('h3');
    const email = document.createElement('p');
    const cat = document.createElement('p');
    const input = document.createElement('input');   // 6. input - не працює ??
    const button = document.createElement('button'); //  7. button - не працює ??
    

    card.classList.add('card');
    div.classList.add('card-top');
    
    avatar.src = user.avatar;
    avatar.alt = user.fullName;
    button.innerText = 'Edit information ';

    name.innerText = user.fullName;
    email.innerText = `Email: ${user.email}`;
    cat.innerText = `Favorite cat: ${user.cat}`;

    button.addEventListener('click', async () => {
        const body = { ... user, email: input.value };
        const response = await controller('PUT', `/users/${user.id}`, body);
        console.log(response);
    })

    div.append(avatar);
    div.append(name);
    card.append(div);
    card.append(email);
    card.append(cat);  
    card.append(input); // 5. input - не працює ??
    card.append(button); // 4. button - не працює ??
    userContainer.append(card); 
}

// REGISTRATION USER

const registationForm = document.getElementById("registerForm");
registationForm.addEventListener('submit', async e => {
    e.preventDefault();
    const newUser = await createUser(); // 2. await - не працює ??
    renderUser(newUser);
})

async function createUser() {
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("emailReg").value;
    const password = document.getElementById("passwordReg").value;
    const cat = document.getElementById("cat").value;
    const image = document.getElementById("avatar");
    
    const avatar = await getBase64(image.files[0]);

    
    const body = {
        fullName,
        email,
        password,
        cat,
        avatar,
    }

    const newUser = await controller("POST", "/users", body);  // 3. await - не працює ??
    
    return newUser;
}