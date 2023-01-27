        // ДЗ 31. Гамбургер
// Сеть фастфудов предлагает несколько видов гамбургеров:
//     маленький (5$, 20 калорий)
//     большой (10$, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок:
//     сыром (+ 1$, + 20 калорий)
//     салатом (+ 2$, + 5 калорий)
//     картофелем (+ 1,5$ , + 10 калорий)
// Можно добавить добавки:
//     посыпать приправой (+ 1,5$, 0 калорий)
//     полить майонезом (+ 2$, + 5 калорий).
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
// Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций и расчета нужных величин.   

class HamBurger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter(item => item !== topping);
    }
    getToppings() {
        return this.toppings;
    }
    getSize() {
        return this.size;
    }
    getStuffing() { 
        return this.stuffing;
    }
    calculatePrice() {
        let price = HAMBURGER[this.size].price + HAMBURGER[this.stuffing].price;
        this.toppings.forEach(item => price += HAMBURGER[item].price);
        return price;
    }
    calculateCalories() {
        let calories = HAMBURGER[this.size].calories + HAMBURGER[this.stuffing].calories;
        this.toppings.forEach(item => calories += HAMBURGER[item].calories);
        return calories;
    }
}

const HAMBURGER = {
    small: {
        price: 5,
        calories: 20
    },
    big: {
        price: 10,
        calories: 40
    },
    cheese: {
        price: 1,
        calories: 20
    },
    salad: {
        price: 2,
        calories: 5
    },
    potato: {
        price: 1.5,
        calories: 10
    },
    seasoning: {
        price: 1.5,
        calories: 0
    },
    mayonnaise: {
        price: 2,
        calories: 5
    }
}

const hamburger = new HamBurger('small', 'cheese');
const hamburger2 = new HamBurger('small', 'potato');
const hamburger3 = new HamBurger('small', 'salad');
const hamburger4 = new HamBurger('big', 'cheese');
const hamburger5 = new HamBurger('big', 'potato');
const hamburger6 = new HamBurger('big', 'salad');

hamburger.addTopping('seasoning');
hamburger.addTopping('mayonnaise');
hamburger2.addTopping('seasoning');
hamburger2.addTopping('mayonnaise');
hamburger3.addTopping('seasoning');
hamburger3.addTopping('mayonnaise');
hamburger4.addTopping('seasoning');
hamburger4.addTopping('mayonnaise');
hamburger5.addTopping('seasoning');
hamburger5.addTopping('mayonnaise');
hamburger6.addTopping('seasoning');
hamburger6.addTopping('mayonnaise');

console.log(`Price small: ${hamburger.calculatePrice()},  calories: ${hamburger.calculateCalories()}`);
console.log(`Price small: ${hamburger2.calculatePrice()},  calories: ${hamburger2.calculateCalories()}`);
console.log(`Price small: ${hamburger3.calculatePrice()},  calories: ${hamburger3.calculateCalories()}`);
console.log(`Price big: ${hamburger4.calculatePrice()},  calories: ${hamburger4.calculateCalories()}`);
console.log(`Price big: ${hamburger5.calculatePrice()},  calories: ${hamburger5.calculateCalories()}`);
console.log(`Price big: ${hamburger6.calculatePrice()},  calories: ${hamburger6.calculateCalories()}`);









     




