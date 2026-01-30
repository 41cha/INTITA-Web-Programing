const form = document.getElementById('emailForm');

const input = document.getElementById('email');

const error = document.getElementById('error');

const success = document.getElementById('success');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let email = input.value.trim();
    let errors = [];

    error.textContent = '';
    success.style.display = 'none';
    input.classList.remove('ok', 'bad');

    if (!email) {
        errors.push('Поле email не може бути порожнім.');
    }

    if (!email.includes('@')) {
        errors.push('Email повинен містити символ @.');
    }

    if (!email.includes('.')) {
        errors.push('Email повинен містити крапку (.).');
    }

    if (errors.length) {

        error.textContent = errors.join(' ');
        input.classList.add('bad');

    } else {

        success.style.display = 'block';
        input.classList.add('ok');

    }
});