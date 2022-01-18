/* BRAINSTORM DE COMO FAZER

Quando clicar na seta pra avançar temos que esconder 
todas as imagens e mostrar a próxima imagem

A imagem atual começa em 0 pois é a primeira imagem.
Assim que for clicado no avançar, preciso adicionar 
mais ao contador de imagens para saber que agora será 
mostrado a segunda imagem.

Esconder todas as imagens
    Pegar todas as imagens usando o DOM e remover a classe "mostrar"

Mostrar a próxima imagem
    Pegar todas as imagens, descobrir qual é a proxima e colocar 
    a classe "mostrar" nela

*/

const imagensPainel = document.querySelectorAll('.imagem-painel'); //Método que pega todos os elementos da tela que tiverem o parametro que você especificar
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens () {
    imagensPainel.forEach(imagem => { //Método usado para percorrer um array
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens () {
    imagensPainel[imagemAtual].classList.add('mostrar'); //ImagensAtual aqui será 1 (iniciou como 0, virou 1 no imagemAtual++) e está recebendo a classe "mostrar"
}

setaAvancar.addEventListener('click', function() { //Quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem
    
    //testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === imagensPainel.length - 1){
        return;
    }
    //A imagem atual começa em 0 pois é a primeira imagem. Assim que for clicado no avançar, preciso adicionar mais ao contador de imagens para saber que agora será mostrado a segunda imagem.

    imagemAtual++;

    //Esconder todas as imagens. Pegar todas as imagens usando o DOM e remover a classe "mostrar".

    esconderImagens();

    //Mostrar a próxima imagem. Pegar todas as imagens, descobrir qual é a proxima e colocar a classe "mostrar" nela.

    mostrarImagens();
});

setaVoltar.addEventListener('click', function() { //Inverso do processo anterior
    
    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();

    mostrarImagens();
});