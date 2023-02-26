   // ДЗ 22. Object 1
// Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
// Написать функцию convert(obj), которая получает аргументом obj.
// Функция должна вернуть новый объект вида:


let obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30,
    },
    foo2: {
        k: 23,
        p: 13,
        l: [100, 200, 300]
    }
}

function convert(object) {
    let newObj = {};

    for(let key in object) {
        if(typeof object[key] === "object") {
            const newObj2 = convert(object[key]);
            for(let key in newObj2) {
                newObj[key] = newObj2[key];
            }
        } else {
            newObj[key] = object[key];
        }
    }

    return newObj;
}

console.log(convert(obj));