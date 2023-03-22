      //     ДЗ 47. Heroes 🦸🏼‍♂️ 🦸🏻‍♀️
//    Таблицы создаете сами на сайте
// https://mockapi.io/projects

// Пример объекта ресурса heroes (то есть path должен быть heroes):
// {
//   "name": "Iron Man",
//   "comics": "Marvel",
//   "favourite": true,
//   "id": "1"
//  }
// Пример объекта ресурса universes:
// {
//   "id": "1",
//   "name": "Marvel"
//  }
// Таблица состоит из 4-х колонок:
// Name Surname
// Comics (DC, Marvel, Comix Zone)
// Favorite (чекбокс)
// Actions (одна кнопка Delete)
// Над таблицей форма добавления с тремя полями:
// Name Surname (input)
// Comics (DC, Marvel, Comix Zone) (select) – данные запрашиваем методом GET с ресурса universes
// Favourite (true, false) (checkbox).

// Действия:
//   При сабмите формы происходит добавление персонажа в базу (POST) и вывод в html строки с информацией о герое в таблицу. 
//   Если в базе уже существует герой с таким же свойством name, то объект не добавляется в базу (можно просто в консоль вывести инфу, что юзер с таким именем уже есть в базе).
//   При изменении состояния checkbox в колонке Favourite происходит изменение данных по этому персонажу в базе (PUT).
//   При нажатии на кнопку Delete в строке персонажа происходит удаление с базы соответствующего героя (DELETE) и удаление соответствующей tr с таблицы.

//const  Api = 'https://640e2c43b07afc3b0dc12d44.mockapi.io';
// const  table = document.querySelector('#heroesTable');
// const  form = document.querySelector('#heroesForm');
// const  name = document.querySelector('#heroName');
// const  comics = document.querySelector('#heroComics');
// const  favourite = document.querySelector('input[type="checkbox"]');
// const  btn = document.querySelector('#Btn');

// const  getHeroes = async () => {
//       const  response = await fetch(`${Api}/heroes`);
//       const  data = await response.json();
//       return  data;
//       };

// const  getUniverses = async () => {
//       const  response = await fetch(`${Api}/universes`);
//       const  data = await response.json();
//       return  data;
//       };

// const  createHero = async (hero) => {
//       const  response = await fetch(`${Api}/heroes`, {
//             method: 'POST',
//             headers: {
//                   'Content-Type': 'application/json;charset=utf-8',
//                   'Access-Control-Allow-Origin': '*',
//             },
//             body: JSON.stringify(hero),
//       });
//       const  data = await response.json();
//       return  data;
//       };

// const  updateHero = async (hero) => {
//       const  response = await fetch(`${Api}/heroes/${hero.id}`, {
//             method: 'PUT',
//             headers: {
//                   'Content-Type': 'application/json;charset=utf-8',
//                   'Access-Control-Allow-Origin': '*',
//             },
//             body: JSON.stringify(hero),
//       });
//       const  data = await response.json();
//       return  data;
//       };

// const  deleteHero = async (id) => {
//       const  response = await fetch(`${Api}/heroes/${id}`, {
//             method: 'DELETE',
//       });
//       const  data = await response.json();
//       return  data;
//       };

// const  renderHeroes = async () => {
//       const  heroes = await getHeroes();
//       const  universes = await getUniverses();
//       const  heroesList = heroes.forEach((hero) => {
//             const  universe = universes.find((item) => item.id === hero.comics);
//             hero.comics = universe.name;
//             return  `<tr>
//             <td>${hero.name}</td>
//             <td>${hero.comics}</td>
//             <td><input type="checkbox" data-id="${hero.id}" ${hero.favourite ? 'checked' : ''}></td>
//             <td><button data-id="${hero.id}">Delete</button></td>
//             </tr>
//             `;
//       });
//       table.innerHTML = heroesList.append();
//       };

// const  addHero = async (e) => {
//       e.preventDefault();
//       const  hero = {
//             name: name.value,
//             comics: comics.value,
//             favourite: favourite.checked,
//       };
//       const  heroes = await getHeroes();
//       const  heroExist = heroes.find((item) => item.name === hero.name);
//       if (heroExist) {
//             return  console.log('Hero with this name already exist');
//             };
//       await createHero(hero);
//       renderHeroes();
//       };

// const  updateFavourite = async (e) => {
//       if (e.target.tagName !== 'INPUT') {
//             return  console.log('Not input');
//             };
//       const  hero = {
//             id: e.target.dataset.id,
//             favourite: e.target.checked,
//       };
//       await updateHero(hero);
//       renderHeroes();
//       };

// const  deleteHeroById = async (e) => {
//       if (e.target.tagName !== 'BUTTON') {
//             return  console.log('Not button');
//             };
//       await deleteHero(e.target.dataset.id);
//       renderHeroes();
//       }

// renderHeroes();
// form.addEventListener('submit', addHero);
// table.addEventListener('click', updateFavourite);
// table.addEventListener('click', deleteHeroById);

////////////////////////////////////////////////////////////////////////



              //21.03.2023   23 59 59



fetch('https://640e2c43b07afc3b0dc12d44.mockapi.io/universes')
    .then(response => response.json())
    .then(universes => {

  const comicsSelect = document.getElementById('hero-comics');
        universes.forEach(universe => {
  const option = document.createElement('option');
        option.value = universe.name;
        option.textContent = universe.name;
        comicsSelect.append(option);
    });
});

const form = document.getElementById('add-hero-form');
      form.addEventListener('submit', e => {
         e.preventDefault();
const name = document.getElementById('hero-name').value;
const surname = document.getElementById('hero-surname').value;
const comics = document.getElementById('hero-comics').value;
const favorite = document.getElementById('hero-favorite').checked;

fetch('https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes', {
     method: 'POST',
     headers: {
               'Content-Type': 'application/json'
      },
      body: JSON.stringify({
                            name,
                            surname,
                            comics,
                            favorite
                         })
                    })
     .then(response => {
          if (response.ok) {
              return response.json();
          } else if (response.status === 409) {
             console.log(`Hero with name ${name} already exists`);
             throw new Error(`Hero with name ${name} already exists`);
          } else {
             throw new Error('Failed to add hero');
        }
      })
     .then(hero => {
const row = document.createElement('tr');
      row.dataset.id = hero.id;

const nameCell = document.createElement('td');
      nameCell.textContent = hero.name;
           
          row.append(nameCell);

const surnameCell = document.createElement('td');
      surnameCell.textContent = hero.surname;
      row.append(surnameCell);

const comicsCell = document.createElement('td');
      comicsCell.textContent = hero.comics;
      row.append(comicsCell);

const favoriteCell = document.createElement('td');
const favoriteCheckbox = document.createElement('input');
      favoriteCheckbox.type = 'checkbox';
      favoriteCheckbox.checked = hero.favorite;
      favoriteCheckbox.addEventListener('change', () => {
           fetch(`https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes/${hero.id}`, {
                  method: 'PUT',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        favorite: favoriteCheckbox.checked
                  })
           })
      .then(response => {
          if (!response.ok) {
           throw new Error('Failed to update hero');
           }
      })
      .catch(error => console.error(error));
});

      favoriteCell.append(favoriteCheckbox);
      row.append(favoriteCell);

const deleteCell = document.createElement('td');
const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
             fetch(`https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes/${hero.id}`, {
                     method: 'DELETE'
             })
                  .then(response => {
                           if (!response.ok) {
                                throw new Error('Failed to delete hero');
                           }
                     })

                  .then(() => {
                              row.remove();
                        })
                  .catch(error => console.error(error));
      });
      deleteCell.append(deleteButton);
      row.append(deleteCell);

      document.getElementById('heroes-table').append(row);
})
.catch(error => console.error(error));
});

const heroesTable = document.getElementById('heroes-table');
      heroesTable.addEventListener('click', e => {
      if (e.target.tagName !== 'BUTTON') {
      return;
      }
      const heroId = e.target.closest('tr').dataset.id;
      fetch(`https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes/${heroId}`, {
      method: 'DELETE'
      })
      .then(response => {
      if (!response.ok) {
      throw new Error('Failed to delete hero');
      }
      })
      .then(() => {
      e.target.closest('tr').remove();
      }
      )
      .catch(error => console.error(error));
      });

      
