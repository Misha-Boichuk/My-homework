//        ДЗ 49. Работа с webpack, git
// 1) Создать проект на webpack, webpack-cli, webpack-dev-server по видео текущего урока.
// 2) Создать массив с пользователями в файле data
// 3) Создать файли с функциями которая выводит пользователей на страницу ввиде списка из файла data.js: 
//      id, name, age, email, country, company, birthday
// 4) Создать репозиторий на git и выгрузить туда проект

import users from './components/data';

import renderUsers from './components/render';

renderUsers(users);
