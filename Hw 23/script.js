// Написать функцию assignObjects(obj1, obj2), 
// которая принимает аргументами 2 объекта и возвращает новый, 
// который состоит из свойств обоих объектов (склеить). 
// Если свойство повторяется, то взять значение второго объекта



// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }

// let objFirst = { x: 10, y: 20};
// let objSecond = {y: 100, z: 30};
const obj1= {
    x: 10,
    y: 20,
};

const obj2 = {
    z: 30,
};

const objA = {
    x: 10,
};

const objB = {
    x: 20,
    y: 30,
}

function assignObject(objA, objB){
    let newObj = {};

    for( let key in objA) {
        newObj[key] = objA[key];
    }
    for(let key in objB) {
        newObj[key] = objB[key];
    }

    return newObj;                  //Object.assign({}, obj1, obj2);
}

console.log(assignObject(obj1, obj2));
console.log(assignObject(objA, objB));

//console.log(assignObject(objFirst, objSecond));