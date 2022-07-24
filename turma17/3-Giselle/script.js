// Validação do Formulário

(function () {

    var formulario = document.getElementsByName('formulario')[0]


    var repositorios = document.getElementById('repositorios')
    // console.log(repositorios)

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
    
    fetch(`https://api.github.com/users/gicordone/repos`)
        .then(response =>{ response.json()
        .then(repo => {
            data = repo;
            console.log(data[0])
            const text = 'conteudo' 
            repositorios.innerHTML =`<div class="col">
            <a href="${data[0].clone_url}" target="_blank"><button type="button" class="btn btn-secondary btn-lg">${data[0].name}</button></a>
        </div>`
        })

    })

}())


// "https://api.github.com/repos/{owner}/{repo}"