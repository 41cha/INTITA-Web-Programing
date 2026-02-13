const form = document.getElementById('emailForm');
const input = document.getElementById('email');
const error = document.getElementById('error');
const success = document.getElementById('success');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let email = input.value.trim();

    error.textContent = '';
    success.style.display = 'none';
    input.classList.remove('ok', 'bad');

    // Simple regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        error.textContent = 'Поле email не може бути порожнім.';
        input.classList.add('bad')

    } else if (!emailRegex.test(email)) {
        error.textContent = 'Введіть правильний email.';
        input.classList.add('bad');

    } else {
        success.style.display = 'block';
        input.classList.add('ok');
    }
});