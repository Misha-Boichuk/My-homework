     // ДЗ 43. Get users
// Написать код, который сформирует 2 запроса за различными файлами json (data.json, data2.json).
//  Пример файла data.json:
//     {
//         "children": ["Jack","Jacky","Alexandr"]
//     }
//     Пример файла data2.json:
//     {
//         "children": ["Anna","Ivan","Alena"]
//     }
// Необходимо соединить из двух полученных объектов массивы children и вывести результат в консоль.
//    Результат вывода в консоль:
//      ["Jack","Jacky","Alexandr","Anna","Ivan","Alena"]

const data = fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        console.log(value);
    });

const data2 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        console.log(value);
    });

Promise.all([data, data2])
    .then(value => {
        console.log(value);
    });

    