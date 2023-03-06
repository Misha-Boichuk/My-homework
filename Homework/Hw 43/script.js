   // ДЗ 43. Get users
// Написать код, который сформирует 2 запроса за различными файлами json (data.json, data2.json).
//     Пример файла data.json:
//     {
//         "children": ["Jack","Jacky","Alexandr"]
//     }
//        Пример файла data2.json:
//           {
//               "children": ["Anna","Ivan","Alena"]
//           }
// Необходимо соединить из двух полученных объектов массивы children и вывести результат в консоль.
//    Результат вывода в консоль:
//      ["Jack","Jacky","Alexandr","Anna","Ivan","Alena"]

const people = [];
function requestData(method, action) {

    const xml = new XMLHttpRequest();
    xml.open(method, action);
    xml.send();

    const parse = response => JSON.parse(response);

    xml.addEventListener('readystatechange', () => {
        if (xml.readyState === 4 && xml.status === 200) {
            people.push(...parse(xml.response).children);
         }
    });
}

requestData('GET', 'data.json');
requestData('GET', 'data2.json');

console.log(people);