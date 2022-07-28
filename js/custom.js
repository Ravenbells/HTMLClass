/* Concatenar */
/* console.log("Hello, World" + 1 + "1"); */

/* Função para abrir vídeos */
function VideosYoutube() {
    /* Variavel que pega o elemento pelo seu ID  */
    let videoShow = document.getElementById("VideoFrance");
    console.log(videoShow);
    /* Valor que quero colocar no elemento */
    /* videoShow.style.display = "block"; */

    if (videoShow.style.display == "block") {
        videoShow.style.display = "none";
    }
    else {
        videoShow.style.display = "block";
    }
    console.log(videoShow.style.display == "block");

    /* CONDICIONAIS */
    /* == Significa que estamos procurando algo igual a outro */
    /* == Significa um valor LÓGICO */
    /* = Significa que estamos procurando algo para receber de outra fonte */
    /* = Significa que o valor vai ser recebido/substituído por outro */
}



/* let idadeMenor = 25;
let idadeMaior = 22; */

let idade1 = prompt("coloque a idade menor");
let idade2 = prompt("coloque a idade maior");
let nome = prompt("coloque seu nome");
let ComidaFavorita = prompt("coloque sua comida favorita");

alert("O seu nome é " + nome);

if (idade1 < idade2) {
    console.log("A idade é menor mesmo!");
}
else if (idade1 == idade2) {
    console.log("As idades são iguais!");
}
else {
    console.log("A idade na verdade é maior!");
}

/* intellisense - as linhas onduladas que indicam erro; */
/* snippets - as listas que aparece de sugetão para o seu código; */

switch (ComidaFavorita) {
    case "Peixe":
    alert("Você tem bom gosto!");
    break;
    case "Torta de limão":
    alert("Torta mais doce do que azeda!");
    break;
    case "Patacon":
    alert("Esmirna não gosta de Patacon porque ela tem mal gosto");
    break;
    case ("Arepa"):
        alert("Nailen deu pro Eduardo e ele gostou!");
    break;
    case ("Cachapa"):
        alert("Johana fez Cachapa sabrosa!");
    break;
    default:
        alert("Que diferente!");
    break;
}





/* Verifica se é verdadeiro ou falso
    - Sem levar em conta o tipo das variaveis  */
/* == 

if ("11" == 11) { "É verdadeiro" } */

/* Verifica se é verdadeiro ou falso
    - Leva em conta o tipo das variaveis */
/* === 

if ("11" === 11) { "É falso" } */

/* Coloca dados em uma variavel */
/* =

let minhavariavel = "olá"; */

/* Verifica se a DIFERENÇA é verdadeira ou falsa
    - Sem levar em conta o tipo das variaveis  */
/* != 

if (11 != 11) { "É falso" };

if (11 != 15) { "É verdadeiro" }; */

/* Verifica se a DIFERENÇA é verdadeira ou falsa
    - Leva em conta o tipo das variaveis  */
/* !==

if (11 !== 11) { "É falso" };

if ("11" !== 11) { "É verdadeiro" };
 */
/* E */
/* && */

/* Dados Booleans (Lógicos) */
/* let texto = "olá";
let numero = 20;
if (texto == "bla" && numero == 20) { */
    /*    if(TextoDeAviso){
   
       } */
  /*   console.log("é igual a bla e o número é igual a 20");
}
else {
    console.log("não é igual a bla ou o número não é igual a 20");
} */

/* OU */
/* ||

let texto = "olá";
let numero = 20;
if (texto == "olá" || numero == 20) { */
    /*    if(TextoDeAviso){
   
       } */
      /*  console.log("é igual a olá OU número é igual a 20");   
}
else {
       console.log("não é igual a olá e o número não é igual a 20"); 
}
 */




