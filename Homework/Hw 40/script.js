//     ДЗ 40. generateList
// Написати функцію generateList(array), 
// яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3])
// і генерує список з елементів:

// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>


// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>
//         <ul>
//             <li>1.1</li>
//             <li>1.2</li>
//             <li>1.3</li>
//         </ul>
//     </li>
//     <li>3</li>
// </ul>

let array = [1, 2, 3, [1, 2, 3, [1.1, 1.2, 1.3]], 4];

function generateList(array) {
    let ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        if (Array.isArray(array[i])) {
            li.appendChild(generateList(array[i]));
        } else {
            li.innerText = array[i];
        }
        ul.appendChild(li);
    }
    return ul;
}   
document.body.appendChild(generateList(array));
