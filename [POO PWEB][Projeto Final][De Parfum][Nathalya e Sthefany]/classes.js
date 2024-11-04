class Usuario{
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

class Produto{
    constructor(foto, descricao, valor){
        this.foto = foto;
        this.descricao = descricao;
        this.valor = Number(valor);
    }
}

class CarrinhoDePerfume{
    constructor(){
        this.listaDePerfumes = [];
    }

    adicionarProduto(produto){
        if (produto instanceof Produto) {
            this.listaDePerfumes.push(produto);
        }else{
            console.error('Erro!');
        }
    }
}