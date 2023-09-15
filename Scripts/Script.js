

// Alterar o texto de um paragrafo HTML
const textoPorAlterar = document.querySelector('#alterar').textContent = "Novo Conteudo no Texto do Paragrafo";


// Alterar a cor de um elemento
const alterarCor = document.querySelector('#shangeColor');
alterarCor.addEventListener('click', function(){
    alterarCor.style.backgroundColor = "blue";
})


// Incrementar o contador na tela
const contador = document.querySelector('#contador');
let currentCont = 0;
contador.textContent = currentCont;
contador.addEventListener('click', function(){
    currentCont += 1;
    contador.textContent = currentCont;
})


// Inserir Novo elemento HTML
const novoElemento = document.createElement('p');
novoElemento.textContent = "Novo elemento incerido";
const body = document.querySelector('#body');
body.appendChild(novoElemento);


// Desabilitar um elemento
const desabilitar = document.querySelector('#desabilitar');

desabilitar.addEventListener('click', function(){
    desabilitar.style.display = 'none';
})


// captura dados de um formulário
const divForm = document.querySelector('#formDiv');
const minhaLista = [];

divForm.addEventListener('click', function(){
    minhaLista.splice(0, minhaLista.length);

    minhaLista.push(document.querySelector('#texto1').value);
    minhaLista.push(document.querySelector('#texto2').value);
    
    const texto1P = document.querySelector('#texto1P');
    texto1P.textContent = minhaLista[0];

    const texto2P = document.querySelector('#texto2P');
    texto2P.textContent = minhaLista[1];

})
