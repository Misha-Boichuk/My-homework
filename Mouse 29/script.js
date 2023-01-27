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

class Lector extends Person {
	constructor(argumenrs) {
		super(argumenrs);
		
	}

	renderCourses() {
		let allTitle = this.courses
		.map((item) => {
			return `<div class="course">
				<div class="course__title">${item.title}</div>
				<div class="course__score">${item.score}</div>
				<div class="course__students-score">${item.studentsScore}</div>
				</div>`
				})
				.join(``);
				return allTitle;
	}	
}

class Student extends Person {	

	constructor(argumenrs) {
		super(argumenrs);
	}
}

class Person {
	constructor({name, age, img, role, courses}) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
		this.courses = courses;
	}

	renderCourses() {
		let allTitle = this.courses
		.map((item) => {
			return `<div class="course">
				<div class="course__title">${item.title}</div>
				<div class="course__mark">${item.mark}</div>
				</div>`
				})
				.join(``);
				return allTitle;
	}

	render() {
		return `<div class="person">
		<div class="person__img">
			<img src="${this.img}" alt="person">
		</div>
		<div class="person__name">${this.name}</div>
		<div class="person__age">${this.age}</div>
		<div class="person__role">
			<img src="${roles[this.role]}" alt="role">
		</div>
		<div class="person__courses">
			${this.renderCourses()}
		</div>
		</div>`
	}
}

class User {
	constructor() {
		this.users = users;
	}

	render() {
		let allUsers = this.users
		.map((item) => {
			if (item.role === "lector") {
				return new Lector(item).render();
			} else if (item.role === "student") {
				return new Student(item).render();
			} else {
				return new Person(item).render();
			}
		})
		.join(``);
		return allUsers;
	}
}

let user = new User();
document.querySelector(`this.users`).innerHTML = user.render();

