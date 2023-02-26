     //ДЗ 23. Object 2
// Написать функцию assignObjects(obj1, obj2), 
// которая принимает аргументами 2 объекта и возвращает новый, 
// который состоит из свойств обоих объектов (склеить). 
// Если свойство повторяется, то взять значение второго объекта



// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }

// let objFirst = { x: 10, y: 20};
// let objSecond = {y: 100, z: 30};
const objOne= {
    x: 10,
    y: 20,
};

const objTwo = {
    z: 30,
};

const objTree = {
    x: 10,
};

const objFour = {
    x: 20,
    y: 30,
}

function assignObject(objTree, objFour){
    let newObj = {};

    for( let key in objTree) {
        newObj[key] = objTree[key];
    }
    for(let key in objFour) {
        newObj[key] = objFour[key];
    }

    return newObj;                 
}

console.log(assignObject(objOne, objTwo));
console.log(assignObject(objTree, objFour));