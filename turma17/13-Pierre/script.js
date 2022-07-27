function button() {
    console.log("Clique no button");
}

//API HTTP Github
var idGitHub = document.getElementById("submitBtn");
var nomeGitHub = document.getElementById("nomeGitHub");
var linkGitHub = document.getElementById("linkGitHub");

function github(e) {
    fetch("https://api.github.com/users/Philistin/repos")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((data) => {
                nomeGitHub.innerHTML += "<p/>" + data.name;
                linkGitHub.innerHTML += "<p/>" + data.html_url;
            });

            console.log(data);
        })
        .catch((e) => console.log("Erro:" + e));

    //Desabilitar botão listar após um clique por 10 segundos
    e.disabled = true;
    setTimeout(function () {
        toggleDisabled(e)
    }, 10000);

    function toggleDisabled(elem) {
        elem.disabled = !elem.disabled;
    }
}

//Validação do formulário
const dateInput = document.querySelector('#data');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const assuntoInput = document.querySelector('#assunto');
const mensagemTextarea = document.querySelector('#mensagem');
const submitButton = document.querySelector('#submitbutton');

const errorMessage = document.querySelector('.msg');

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const dateValue = dateInput.value;
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const assuntoValue = assuntoInput.value;
    const mensagemValue = mensagemTextarea.value;

    if (dateValue === '' || nameValue === '' || emailValue === '' || assuntoValue === '' || mensagemValue === '') {
        errorMessage.textContent = ("Favor preencher todos os campos!");

        setTimeout(() => {
            errorMessage.textContent = ("");
        }, 3000);
        return;
    }

    if (emailValue.search("@") == -1) {
        errorMessage.textContent = ("E-mail incorreto! Caractere @  ausente no campo.");

        setTimeout(() => {
            errorMessage.textContent = ("");
        }, 4000);
        return;
    }

    dateInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    assuntoInput.value = '';
    mensagemTextarea.value = '';
});