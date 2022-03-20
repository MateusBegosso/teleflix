let listaDelinks = [];


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
}