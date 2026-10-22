"use strict";
const cafeName = "Kaak & Code";
const price = 2;
let name = prompt("Welcome to " + cafeName + "! What is your name?", "Student");

if (name === null || name.trim() === "") {
    name = "Student";
}

let now = new Date();
let hour = now.getHours();
let greeting;

if (hour < 12) {
    greeting = "Good morning, ";
} else {
    greeting = "Good afternoon, ";
}

document.getElementById("greeting").textContent =
    greeting + name.toUpperCase();
document.getElementById("today").textContent =
    now.toLocaleString();

if (hour >= 14) {
    document.getElementById("banner").textContent =
        "Happy hour is ON! Enjoy your visit!";

    document.getElementById("banner").style.color = "orange";
}
let qty = prompt("How many manoushe would you like?");
console.log(qty + 1);
qty = Number(qty);
let total = qty * price;
let coffee = confirm("Would you like a coffee for $1.50?");
if (coffee) {
    total = total + 1.5;
}

document.getElementById("total").textContent =
    name + ", your total is $" + total.toFixed(2);

alert("Thank you for visiting " + cafeName + ", " + name + "!");
