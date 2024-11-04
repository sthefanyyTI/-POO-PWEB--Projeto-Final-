function desenharCarrinhoDePerfumes(carrinho, tagHTML) {

    tagHTML.innerHTML = '';//zera

    for (let i = 0; i < carrinho.listaDePerfumes.length; i++) {
        tagHTML.innerHTML += `
        <div class="card">    
    
                <img class="imgCard" src="${carrinho.listaDePerfumes[i].foto}">
                <span class="descPerfume">${carrinho.listaDePerfumes[i].descricao}</span>
                <span class="valorPerfume">R$ ${carrinho.listaDePerfumes[i].valor}</span>
        </div>    
        `;  
    }
    
}
