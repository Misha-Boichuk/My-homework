// const arr = [1,2,[10,20], [100, 200, [30, 40]]];

// function copyArray(arr) {
//     const copyList = [];

//     for( let i = 0; i < arr.length; i++) {    // виводить значення в консоль всі цифри в рядок
//         if(Array.isArray(arr[i])) {
//             copyArray(arr[i])
//         } else {
//             console.log(arr[i]);
//         }
//     }
//     // return copyList;
// }

// copyArray(arr);

const arr = [1,2,[10,20], [100, 200, [30, 40, [1000, 2000]]]];

function copyArray(arr) {
    const copyList = [];

    for( let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            copyArray(arr[i])                 // з копіювали всі елементи 
            copyList.push(arr[i].slice())    // і вивели в консоль   
        } else {
            copyList.push(arr[i]);
        }
    }
    return copyList;
}

console.log(copyArray(arr));