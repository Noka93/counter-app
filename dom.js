// editName = () => {
// 	let userInput = prompt("What is your name?");

// 	let heading = document.querySelector("h1");
// 	heading.innerText = `My name is ${userInput}`;
// };

// let btn = document.getElementById("btn");
// btn.addEventListener("click", editName);

let heading = document.querySelector("h1");
let count = 0;
heading.innerHTML = count;

const increaseBtn = document.getElementById("btn-increase");
const decreaseBtn = document.getElementById("btn-decrease");
const resetBtn = document.getElementById("btn-reset");
const multiplicationBtn = document.getElementById("btn-multiplication");
const divisionBtn = document.getElementById("btn-division");

increaseBtn.addEventListener("click", () => {
	if (count == 20) {
		return count;
	} else {
		count += 1;
		heading.innerHTML = count;
	}
});

decreaseBtn.addEventListener("click", () => {
	if (count <= 0) {
		return count;
	} else {
		count -= 1;
		heading.innerHTML = count;
	}
});

resetBtn.addEventListener("click", () => {
	count = 0;
	heading.innerHTML = count;
});

multiplicationBtn.addEventListener("click", () => {
	if (count == 5) {
		return count;
	} else {
		count = count * 2;
		heading.innerHTML = count;
	}
});

divisionBtn.addEventListener("click", () => {
	if (count < 1) {
		return count;
	} else {
		count = count / 2;
		heading.innerHTML = count;
	}
});
