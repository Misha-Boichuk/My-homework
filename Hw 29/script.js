//     ДЗ 29. Рендеринг карточек юзеров системы

// Исходный код проекта находится в архиве code.zip

// Файл script.js содержит данные:
// 	users – массив юзеров системы.
// 	roles – объект ролей юзера.
// 	gradation – объект с диапазоном оценок.
// Что нужно сделать: отрендерить для каждого юзера с массива users соответствующего вида блок.
// 	Для каждого юзера в блоке выводим:
// 	Картинку юзера – свойство img
// 	Имя юзера – свойство name
// 	Возраст юзера – свойство age
// 	Роль юзера – свойство role. Если у юзера свойство courses есть, то выводим перечень пройденных курсов.
// Делаем основной класс User, в котором будет созданы метод render и renderCourses.

// Для каждой роли делаем свой класс Student, Lector, Admin, который наследует класс User.

// В классах Lector, Admin переопределяем метод renderCourses для того, что бы в нужном виде отобразить список курсов.

// Заданную html-разметку и css-классы для каждого блока можете править как хотите.

// Главное – визуально отобразить так, как на картинке.

const roles = {
	admin: "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
	student: "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
	lector: "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
	constructor(name, age, img, role) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
	}

	render() {
		const user = document.createElement("div");
		user.classList.add("user");
		user.innerHTML = `
			<div class="user__img">
				<img src="${this.img}" alt="user">
			</div>	
			<div class="user__info">
				<div class="user__name">${this.name}</div>
				<div class="user__age">${this.age}</div>
			</div>
			<div class="user__role">
				<img src="${roles[this.role]}" alt="role">
			</div>
		`;
		return user;
	}

    renderCourses() {
		const courses = document.createElement("div");
		courses.classList.add("courses");
		courses.innerHTML = `
			<div class="courses__title">Courses</div>
			<div class="courses__list">
				${this.courses.map(course => `
					<div class="course">
						<div class="course__title">${course.title}</div>
						<div class="course__mark">${course.mark}</div>
					</div>
				`).join("")}
			</div>
		`;
		return courses;
	}
} 

class  Student extends User {
	constructor(arg) {
		super(arg);
	}
    
    renderCourses() {
		const courses = document.createElement("div");
		courses.classList.add("courses");
		courses.innerHTML = `
			<div class="courses__title">Courses</div>
			<div class="courses__list">
				${this.courses.map(course => `
					<div class="course">
						<div class="course__title">${course.title}</div>
						<div class="course__mark">${course.mark}</div>
					</div>
				`).join("")}
			</div>
		`;
		return courses;
	}
}

class Lector extends User {
		constructor(arg) {
			super(arg);
		}	
}

class Admin extends User {
		constructor(arg) {
			super(arg);
		}
}
