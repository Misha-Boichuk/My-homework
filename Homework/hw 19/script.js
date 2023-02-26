    // ДЗ 19 Functions 3
// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции. При копировании массива – функция применяется к каждому элементу копируемого массива.


// newList = copy(list, function(value){ return value*10; })

const arr =[1,2, "str", true, function f1(){}, 10];

function copy(list, func) {
    const copyArr = list.slice();
    
    if(typeof func === "function") {
        for(let i = 0; i < copyArr.length; i++) {
           if(typeof copyArr[i] === "number") copyArr[i] = func(copyArr[i]);
        }
    }
    return copyArr;
}
function multiply(value) {
    return value *= 100;
}

console.log(copy(arr, multiply));