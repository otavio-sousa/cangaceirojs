class NegociacaoController {

    constructor(){

        // MANTENDO O CONTEXTO DO THIS com bind()
        // .querySelector() é um método do objeto document
        // esse método usa o this no contexto do document
        // ao atribuirmos a função à uma variável precisamos manter o contexto do this e fazemos isso com o .bind()

        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

    }

    adiciona(event){

        event.preventDefault()

        //SPREAD OPERATORS ...
        // ao passar um array com o spread operator como parametro é iterado cada item do array como um parametro
        
        let data = new Date(...this._inputData.value
            .split('-')
            .map((item, indice) => {

                // PROBLEMA DO MES COMO PARAMETRO NO OBJETO DATA com operador aritmético módulo
                // Os módulos (num % num) são o resto da divisão de um por outro
                // ao dividirmos os nossos indices (0, 1, 2) por 2 e subtrairmos o resto da diivisão notaremos que o nosso argumento mês será subtraído 1
                return item - indice % 2
            }))


        let negociacao =  new Negociacao(
            data,
            this._inputQuantidade.value, 
            this._inputValor.value
        )

        console.log(negociacao)
    }
 


}