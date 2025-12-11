let income = prompt("Enter your income:");
let rent = prompt("Enter your rent:");
let food = prompt("Enter your food expenses:");
let transport = prompt("Enter your transport expenses:");
let entertainment = prompt("Enter your entertainment expenses:");

let totalExpenses = Number(rent) + Number(food) + Number(transport) + Number(entertainment);
let savings = Number(income) - totalExpenses;

alert("Your total expenses are: " + totalExpenses);
alert("Your savings are: " + savings);

if (savings > 0) {
    alert("У вас залишилися гроші");
}

if (savings == 0) {
    alert("Ви витратили все");
}

if (savings < 0) {
    alert("Ви в мінусі");
}