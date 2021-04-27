// uma classe é uma abristração de algo real
class Negociacao {

    // no constructor ficam as propriedades "caracteristicas" da nossa abstração
    // podemos receber valores como parametros da instancia da class
    // definir um underline à propriedade indica que esta não deva ser alterada (somente pelos métodos de dentro da própria class)
    constructor(data, quantidade, valor){

        this._data = data,
        this._quantidade = quantidade,
        this._valor = valor
    }

    // definimos os métodos diretos na classe
    // esses métodos são comportamentos que damos aos nossos dados
    get volume(){

        return this._quantidade * this._valor
    }

    // métodos acessadores
    // servem para acessarmos os dados da class
    // o prefixo get é utilizado para acessarmos os valores como se fosse o acesso direto à propriedade -> negociacao.quantidade
    get data(){

        return this._data
    }

    get quantidade(){

        return this._quantidade
    }

    get valor(){

        return this._valor
    }

}