let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click", function () {
    text.classList.toggle("red-text");
    document.body.classList.toggle("dark");
});