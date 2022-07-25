function validateEmail(e) {
    let field = e.target;
    let fieldValue = field.value;

    if (fieldValue.search('@') == -1) {
        displayError('Email nao é válido', field);
    } else {
        clearError(field);
    }

    field.classList.remove('not-validated');
    checkEnableSubmit();
}

function validateNotEmpty(e) {
    let field = e.target;
    let fieldValue = field.value;

    if(fieldValue == '') {
        displayError('Campo nao pode ser vazio', field);
    } else {
        clearError(field);
    }

    field.classList.remove('not-validated');
    checkEnableSubmit();
}

function displayError(message, field) {
    clearError(field)
    field.classList.add('is-invalid');
    let error = document.createElement('small');
    error.style.color = 'red';
    error.classList.add('error-message');
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function clearError(field) {
    let container = field.parentElement;
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }
    field.classList.remove('is-invalid');
}

function checkEnableSubmit() {
    let form = document.querySelector('#form');
    let notValidated = form.querySelectorAll('.not-validated');
    let errors = form.querySelectorAll('.is-invalid');

    if (errors.length == 0 && notValidated.length == 0) {
        enableSubmit();
    } else {
        disableSubmit();
    }
}

function enableSubmit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector ('[type=submit]');

    submit.disabled = false;
}

function disableSubmit() {
    let form = document.querySelector('#form');
    let submit =form.querySelector('[type=submit]');

    submit.disabled = true;
}

document.querySelectorAll('input').forEach(el => el.classList.add('not-validated'));
document.querySelectorAll('input.email').forEach(el => el.addEventListener('keyup', validateEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener('keyup', validateNotEmpty));

const ol = document.querySelector('ol')

function getApiGitHub() {
    fetch('https://api.github.com/users/Arzeus17/repos')
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status)
        }

        var data = await res.json()

        data.map(item => {
            let li = document.createElement('li')

            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong>
            <span>URL: ${item.url}</span>
            <span>Data Criaçao:
                ${Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
            </span>
            `
            ol.appendChild(li)
        })

    }).catch(e => console.log(e))
    }

getApiGitHub()