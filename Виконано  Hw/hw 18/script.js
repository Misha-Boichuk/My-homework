// Написать функцию, которая принимает как аргумент(параметр)
// два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая – должен вернутся функцией.

// Пример:
// a = [1,2,3, 'hello',4,5] => summA = 15
// b = [1,2,3, true, 4, undefined, 6] => summB = 16
// if(summA < summB) => return b

const firstArr = [1,2,3, 'hello', 4,10, true, function f1(){}]; //20
const secondArr = [1,2,3, true, undefined, 6];

function getSumOfNumberInArr(arr) {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number") sum +=arr[i]
    }
    return sum;
}

function getBiggerArray(arr1, arr2) {
    const sum1 = getSumOfNumberInArr(arr1);
    const sum2 = getSumOfNumberInArr(arr2);

    return sum1 > sum2 ? arr1 : arr2;
}
console.log(getBiggerArray(firstArr, secondArr));