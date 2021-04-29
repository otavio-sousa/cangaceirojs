// uma classe é uma abristração de algo real
class Negociacao {

    // no constructor ficam as propriedades "caracteristicas" da nossa abstração
    // podemos receber valores como parametros da instancia da class
    // definir um underline à propriedade indica que esta não deva ser alterada (somente pelos métodos de dentro da própria class)
    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime()), // programacao defensiva
        this._quantidade = quantidade,
        this._valor = valor,
        Object.freeze(this) // congela as propriedades do objeto
    }

    // definimos os métodos diretos na classe
    // esses métodos são comportamentos que damos aos nossos dados

    // métodos acessadores
    // servem para acessarmos os dados da class
    // o prefixo get é utilizado para acessarmos os valores como se fosse o acesso direto à propriedade -> negociacao.quantidade
    get volume(){

        return this._quantidade * this._valor
    }

    get data(){

        // Programação defensiva
        // criar um novo objeto de data impede que o objeto retornado da propriedade data tenha seus métodos alterados
        return new Date(this._data.getTime())
    }

    get quantidade(){

        return this._quantidade
    }

    get valor(){

        return this._valor
    }

}