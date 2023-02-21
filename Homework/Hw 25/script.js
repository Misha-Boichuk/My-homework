     // ДЗ 25. Створюємо сутності

// 1. Створити клас Людина.
//   Властивості:
//    імʼя;
//    вік.
// Методи:
//    конструктор, який приймає два параметри: імʼя та вік;
//    метод, який виводить у консоль інформацію про людину.

// 2. Створити клас Автомобіль.
//    Властивості:
//    марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
//    власник.
// Методи:
//    конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
//    присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, 
//    якщо вік більше 18, інакше виводити у консоль відповідне повідомлення 
//    метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу
// Людина для виведення інформації про власника

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

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
    showInfo() {
        console.log(`Brand: ${this.brand}, model: ${this.model}, year: ${this.year}, number: ${this.number} ${this.owner ? ', Owner: ' + this.owner.name : ''}`);
        if (this.owner && this.owner.age >= 18) {
            this.owner.showInfo();
        } else {
            console.log('Not have owner!');
        }
    }
    setOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`Owner is too young: ${owner.age} !! Not allowed to drive a car!  `);
        }
    }
} 
const human1 = new Human('Ivan', 15);
//const human2 = new Human('Rony', 11);  
const human3= new Human('Katy', 37);  
const human4 = new Human('Masha', 65);  

const car1 = new Car('BMW', 'X5', 2015, 'AA9265AK');    
//const car2 = new Car('Honda', 'Accord ', 2000, 'AD5372W');
const car3= new Car('Mustang', 'GT-500', 1967, 'AT5372W');
const car4 = new Car('Ferrari', 'F40', 1990, 'AC5678ZB');

car1.setOwner(human1);
//car2.setOwner(human2);
car3.setOwner(human3);
car4.setOwner(human4);

car1.showInfo();
//car2.showInfo();
car3.showInfo();
car4.showInfo(); 
