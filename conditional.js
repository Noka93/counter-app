const isMailSent = true;

if (isMailSent) {
	console.log("Mail has been sent to receipt");
}

const isTaskCompleted = false;

if (isTaskCompleted) {
	console.log("The task has been completed");
} else {
	console.log("The task has not been completed");
}

const hour = 20;

if (hour < 10) {
	console.log("Good morning");
} else if (hour < 20) {
	console.log("Good day");
} else {
	console.log("Good evening");
}

console.log(hour);

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// var car1 = new Car("Chevy", "Blazer", 2002);
// var car2 = new Car("Toyotal", "Camry", 2019);

// console.log("Car 1 is a " + car1.year + " " + car1.model + " " + car1.make);
// console.log("Car 2 is a " + car2.year + " " + car2.model + " " + car2.make);

class Cars {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
}

class Human {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old`;
	}
}

const Remi = new Human("Remi", 40);

console.log(Remi.speak());

var car1 = new Cars();

// number > 4 ? log(true) : log(false)

// let number = 19

// if(number > 10){
//     console.log("Correct!!!")
// }else{
//     console.log("Not correct!!!")
// }
