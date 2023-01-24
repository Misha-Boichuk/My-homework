     // ДЗ 25. Створюємо сутності

// 1. Створити клас Людина.
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

// 2. Створити клас Автомобіль.
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): 
// марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, 
// та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, 
//інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу
// Людина для виведення інформації про власника

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

// створити клас людина 
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }
    setOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`Owner is too young`);
        }
    }
    showInfo() {
        console.log(`Brand: ${this.brand}, model: ${this.model}, year: ${this.year}, number: ${this.number}`);
        this.owner.showInfo();
    }
} 
