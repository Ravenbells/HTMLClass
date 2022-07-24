(function () {

    var formulario = document.getElementsByName('formulario')[0]

    var validarCampos = function (e) {
        if (formulario.nome.value == 0) {
            alert("Preencher o nome");
            e.preventDefault();
        }

        if (formulario.email.value == 0) {
            alert("Preencher o email");
            e.preventDefault();
        }

        if (formulario.assunto.value == 0) {
            alert("Preencher o assunto");
            e.preventDefault();
        }

        if (formulario.textArea.value == 0) {
            alert("Preencher a messagem");
            e.preventDefault();
        }
    };

    var validar = function (e) {
        validarCampos(e);

        console.log(e)
    };

    formulario.addEventListener("submit", validar)


    let data;
    var showData;
    
    fetch(`https://api.github.com/users/gicordone/repos`)
        .then(response =>{ response.json()
        .then(repo => {data = repo; console.log(data)})
    })

}())


// "https://api.github.com/repos/{owner}/{repo}"