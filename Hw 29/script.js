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

	renderInfo() {
		return ` 
		  <div class="user">
		    <div class="user_info">
			 <div class="user_info--data">
			   <img src="${this.img}" alt="${this.name} height="50">
			   <div class="user_naming"> 
			     <p>Name: <b>${this.name}<b></p>
				 <p>Age: <b>${this.age}<b></p>
			   </div>
			 </div>
			 <div class="user--role student">
			    <img src="${roles[this.role]}" alt="${this.role} height="25".
				<p>${this.role}</p>
	        </div>
		</div>
		  ${this.courses ? this.renderCourses() : ``}
		</div> `
	}
    renderCourses() {
		let allTitle = this.courses
		.map (el => {
			return`<p class="user_courses--course ${this.role}">
			${el.title} <span class="${grageUser(gradation, el.mark)}"> ${grageUser(gradation, el.mark)}</span></p>`;
		})
		.join(``);
		return `<div class="user_courses">${allTitle}</div>`;
	}
}

class  Student extends User {
	constructor(arg) {
		super(arg);
	}
}  

class Admin extends User {
	constructor(arg) {
		super(arg);
	}
	renderCourses() {
		let allTitle = this.courses
		.map(el => {
			return `div class="user_courses--course ${this.role}">
			<p>Title: <b>Front-end Pro</b></p>
			<p>Lector's score: <span class="${grageUser(gradation, el.score)}">${grageUser(gradation, el.score)}</span></p>)
			<p>Average student's score: <span class="${grageUser(gradation, el.score)}">${grageUser(gradation, el.score)}</span></p>
			</div>`;
		})
		.join(``);
		return `<div class="user_courses admin--info">${allTitle}</div>`;
	}
}

class Lector extends User {
		constructor(arg) {
			super(arg);
		}	
        
		renderCourses() {
		 let allTitle = this.courses
		    .map(el => {
				return `div class="user_courses--course ${this.role}">
				<p>Title: <b>Front-end Pro</b></p>
				<p>Lector's score: <span class="${grageUser(gradation, el.score)}">${grageUser(gradation, el.score)}</span></p>)
				<p>Average student's score: <span class="${grageUser(gradation, el.score)}">${grageUser(gradation, el.score)}</span></p>
				</div>`;
			})
			.join(``);
		return `<div class="user_courses admin--info">${allTitle}</div>`;
	}
}

const Roles = {
	"student": user => new Student(user),
	"lector": user => new Lector(user),
	"admin": user => new Admin(user)
};

function renderUsers(array) {
	let users = array
	  .map(user => Roles[user.role] ? Roles[user.role](user) : new User(user))
	  .map(user => {
		console.log(user);
		return user;
	  })
	  .map(user => user.renderInfo())
	  .join(``);

	  usersBlock.innerHTML = users;
}
renderUsers(users);

function grageUser(gradationObject, mark) { 
	let grate = `test Grade`
	for (let key in gradationObject) {
		if(mark <= key) {
			grate = gradationObject[key];
			break;
		}
		return grate;
	}
}

const markGradation = mark => {
	let grad;

	for(let key in gradation){
      if(mark <= key){
		grad = gradation[key];
		break;
	  }
	}
	return grad;
} 

users 
 .filter(user => user.courses)
 .forEach(user => {
	let userCourses = user.courses;

	userCourses
	   .map(course => {
		if(course.mark)
		    course.markGradation = markGradation(course.mark)
		if(course.score)
		    course.scoreGradation = mark.Gradation(course.score)
        if(course.studentScore)			 	
		    course.scoreStudentScore = mark.Gradation(course.studentScore) 	
	   })
	   console.log(userCourses);
 })

 