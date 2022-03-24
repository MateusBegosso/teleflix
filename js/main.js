/* let listaDelinks = [];


function adicionarFilme() {
    let pegaNomeFilme = document.getElementById("nomeFilme").value;
    let pegaImagemFilme = document.getElementById("filme").value;
    let mensagem = document.getElementById("mensagem");

    if (pegaImagemFilme.endsWith(".jpg")) {
        listaDeFilmes(pegaNomeFilme, pegaImagemFilme);
    } else {
        mensagem.innerHTML = "Endereço de filme inválido."
    }

    document.getElementById("nomeFilme").value = "";
    document.getElementById("filme").value = "";
    
    console.log(listaDelinks);
}


function listaDeFilmes(nome, imagem) {

    let elementoFilme = `
    <section>
    <img src="${imagem}">
    <h2 class="page-title">${nome}<h2/>
    </section>
    `;
    let elementoListaFilme = document.getElementById("listaFilmes");
    elementoListaFilme.innerHTML = elementoListaFilme.innerHTML + elementoFilme;
    listaDelinks.push(imagem);
    mensagem.innerHTML = "Filme adicionado com sucesso!"
} */

const listaDeFilmes = [];
const listaDeImagens = [];
const listaDeTrailers = [];
const mensagem = document.getElementById("mensagem");


function adicionarFilme() {

    const inputNomeFilme = document.getElementById("nomeFilme").value;
    const inputImagemFilme = document.getElementById("imagemFilme").value;
    const inputTrailerFilme = document.getElementById("trailerFilme").value;
    const inputComentarioFilme = document.getElementById("comentarioFilme").value;
    const inputClassificacao = obtemClassificacaoSelecionada();

    if (listaDeFilmes.includes(inputNomeFilme) || listaDeImagens.includes(inputImagemFilme) || listaDeTrailers.includes(inputTrailerFilme)) {
        mensagem.innerHTML = "Esse filme já está na lista";
    } else {
        inserirFilmenaLista(inputNomeFilme, inputImagemFilme, inputTrailerFilme, inputComentarioFilme, inputClassificacao);
    }

    
}


function obtemClassificacaoSelecionada() {

    const umaEstrela = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>`;

    const duasEstrelas = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>`;

    const tresEstrelas = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>`;

    const quatroEstrelas = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>`;

    const cincoEstrelas = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>`;

    const classificacao = [umaEstrela, duasEstrelas, tresEstrelas, quatroEstrelas, cincoEstrelas];

    let valorClassificacao = "";
    let radioClassificacao = document.getElementsByName("classificacao");

    for (let i = 0; i < radioClassificacao.length; i++) {
        if (radioClassificacao[i].checked) {
            valorClassificacao = classificacao[i];
            return valorClassificacao;
        }
    }

}


function inserirFilmenaLista(nome, imagem, trailer, comentario, classificacao) {
    let elementoFilme = `
    <div class="form-wrapper filmes">
    <h3 class="page-title">${nome}</h3>
    <section class="classificacao">${classificacao}</section>
    <img src="${imagem}">
    <p>${comentario}</p>
    <a href="${trailer}" target="_blank">Trailer</a>
    </div>
    `;
    let elementoListaFilme = document.getElementById("listaFilmes");
    elementoListaFilme.innerHTML = elementoListaFilme.innerHTML + elementoFilme;
    listaDeFilmes.push(nome);
    listaDeImagens.push(imagem);
    listaDeTrailers.push(trailer);
    mensagem.innerHTML = "Filme adicionado com sucesso!"
}