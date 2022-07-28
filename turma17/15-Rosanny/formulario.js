const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const asuntoInput = document.querySelector('#asunto');
const mensagemInput = document.querySelector('#mensagem');
const submitButtom = document.querySelector('#submit-buttom');

const errorMessage = document.querySelector('.mensagem')

submitButtom.addEventListener('click', (e) =>{
  e.preventDefault()

  const nomeValue = nomeInput.value;
  const emailValue = emailInput.value;
  const asuntoValue = asuntoInput.value;
  const mensagemValue= mensagemInput.Value;
  
  
  if(nomeValue === '' || emailValue === '' || 
  asuntoValue === '' || mensagemValue === '' ) {
     errorMessage.textContent = "Complete todos os campos!";
     setTimeout(() => {
      errorMessage.textContent = "";
    }, 3000);
  }
     return;

   
})


//API
fetch ('https://api.github.com/users/Rosanny1/repos')
.then(resp => resp.json())
.then(resp => {
 
  var github = document.getElementById('GitHub')

  resp.map((item)=>{
   
    var li = document.createElement('li')

    var link = document.createElement('a')
   
  
    
    link.href = item.html_url

    link.innerHTML = item.html_url
   
  
    link.innerHTML= (item.name)
    link.target='_blank'

    li.append(link)
   

    github.append(li)
  })
})

document.addEventListener("DOMContentloaded", function startApp() {
  
})



