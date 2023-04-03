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


const heroExists = (name) => {
      return fetch(`https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes?name=${name}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to get heroes');
          }
        })
        .then(heroes => heroes.length > 0)
        .catch(error => {
          console.error(error);
          return false;
        });
    };
    
const formB = document.getElementById('add-hero-form');
formB.addEventListener('submit', async e => {
      e.preventDefault();
    
      const name = document.getElementById('hero-name').value;
      const surname = document.getElementById('hero-surname').value;
      const comics = document.getElementById('hero-comics').value;
      const favorite = document.getElementById('hero-favorite').checked;
    
      try {
        if (await heroExists(name)) {
            alert(`Hero with ${name} already exists`);
          throw new Error(`Hero with ${name} already exists`);
        } else {
          const response = await fetch('https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes', {
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
          });
    
          if (!response.ok) {
            throw new Error('Failed to create hero');
          }
    
          const hero = await response.json();
    
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
    
             favoriteCheckbox.addEventListener('change', async () => {
                 const response = await fetch(`https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes/${hero.id}`, {
                       method: 'PUT',
                       headers: {
                             'Content-Type': 'application/json'
                         },
                          body: JSON.stringify({
                              favorite: favoriteCheckbox.checked
                         })
                  });
    
               if (!response.ok) {
                 throw new Error('Failed to update hero');
            }
       });
    
            favoriteCell.append(favoriteCheckbox);
            row.append(favoriteCell);
    
const deleteCell = document.createElement('td');
const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';

      deleteButton.addEventListener('click', async () => {
             const response = await fetch(`https://640e2c43b07afc3b0dc12d44.mockapi.io/heroes/${hero.id}`, {
                      method: 'DELETE'
                  });

                  if (!response.ok) {
                      throw new Error('Failed to delete hero');
                  }

                  row.remove();
             });

                  deleteCell.append(deleteButton);
                  row.append(deleteCell);
                  document.getElementById('heroes-table').append(row);
            }

            } catch (error) {
                console.error(error);
       }
});
             