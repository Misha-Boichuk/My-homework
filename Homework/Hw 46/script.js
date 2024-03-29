      //     ДЗ 46. GitHub API

// Вверху страницы находится инпут и кнопка. Пользователь может ввести туда username любого пользователя гитхаб.
// Когда пользователь ввел логин, он может нажать на кнопку "Найти".
// В этот момент приложение должно отправить запрос на API Github и получить информацию о пользователе
// Данные для пользователя берем из запроса https://api.github.com/users/{{login}} , где логин - это логин выбраного пользователя.
// Н-р для пользователя vladimirkr url будет https://api.github.com/users/vladimirkr
// После получения данных нужно показать аватар пользователя (свойство avatar_url), количество репозиториев
// (свойство public_repos), количество фоловеров (свойство followers) и количество наблюдаемых (свойство following)
// Если такого юзернейма не существует гитхаб вернет ошибку (404). Попробуйте обработать ее в .catch

const input = document.querySelector('input');
const button = document.querySelector('button');
const avatar = document.querySelector('#avatar');
const repos = document.querySelector('#repos');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');

button.addEventListener('click', async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`);
    const data = await response.json();
    result.style.display = 'block';

    avatar.src = data.avatar_url;
    repos.textContent = `Public Repos: ${data.public_repos}`;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Following: ${data.following}`;
  } catch (error) {
    console.log(error);
    alert('User not found');
  }
});
