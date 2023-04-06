const guest = [];

let guestNo = prompt("How many guest do you want? ");

if (isNaN(guestNo)) {
  alert("Input is not a number. Terminating code...");
  throw "Not a number";
}
for (let index = 1; index <= guestNo; index++) {
  const guestlist = prompt("Enter a guest's name");
  guest.push(guestlist);
}
console.log(guest);
alert("Guest collection is complete");
let guestname = prompt("Enter your name");
while (guest.includesguestname) {
  alert("You are welcome");
}
if (guest.includes(guestname)) {
  alert("You are welcome");
} else {
  alert("You are not invited");
}
