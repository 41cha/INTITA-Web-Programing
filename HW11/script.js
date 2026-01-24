let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click", function () {
    text.textContent = "Текст змінився!";
});

btn.addEventListener("click", function () {
    text.textContent = "Текст став червоним!";
    text.style.color = "red";
});

btn.addEventListener("click", function () {
    text.classList.toggle("dark");
});


document.getElementById("btn").onclick = () => {
    document.body.classList.toggle("dark");
};