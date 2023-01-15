//         ДЗ 29. Рендеринг карточек юзеров системы

// Исходный код проекта находится в архиве code.zip

// Файл script.js содержит данные:

// users – массив юзеров системы.
// roles – объект ролей юзера.
// gradation – объект с диапазоном оценок.

// Что нужно сделать: отрендерить для каждого юзера с массива users соответствующего вида блок.

// Для каждого юзера в блоке выводим:

// Картинку юзера – свойство img
// Имя юзера – свойство name
// Возраст юзера – свойство age
// Роль юзера – свойство role.

// Если у юзера свойство courses есть, то выводим перечень пройденных курсов.

// Делаем основной класс User, в котором будет созданы метод render и renderCourses.

// Для каждой роли делаем свой класс Student, Lector, Admin, который наследует класс User.

// В классах Lector, Admin переопределяем метод renderCourses для того, что бы в нужном виде отобразить список курсов.

// Заданную html-разметку и css-классы для каждого блока можете править как хотите) 
// Главное – визуально отобразить так, как на картинке.

// class User = users;

const roles = {
	admin: "Beatuful",
	student: "",
	lector: ""
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
		img: "",
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
		img: "",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "",
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
		img: "",
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
		img: "",
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
		img: "",
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
			},
		],
	},
];

class Lector extends Person {
	constructor(args){
		super(args);
	}
 
    renderCourses() {
	    let allTitle = this.courses
	    .map(el => { 
		   return `<div class="user_courses--course ${this.role}"
		   <p>Title: <br>Front-end Pro</br></p>
		   <p>Lector's score: <span class="${gradation(gradation, el.score)}">${grageUser(gradation, el.score)}</span></p>
		   <p>Average student's score: <span class="${grageUser(gradation, el.score)}">${grageUser(gradation, el.score)}</span></p>
		   </div>`;
	    })
	      .join("")
	      return `<div class="user_courses admin--info">${allTitle}</div>`;
	}
}

const ROLES = {
	"student": user => new Student(user),
	"admin": user => new Admin(user),
	"lector": user => new Lector(user)
}

function renderUsers (array) {
	let users = array 
	.map(user => ROLES[user.role] ? ROLES[user.role](user) : new Person(user))
	.map(user => {
		console.log(user);
		return user;
	})
	.map(user => user.renderInfo())
	.join("");

	usersBlock.innerHTML = users;
}
renderUsers(users);

function grageUser(gradationObject, mark) {
	let grade = `test Grade`
	for(let key in gradationObject) {
		if (mark <= key) {
			grade = gradationObject[key]
			break
		}
	}
	return grade
};