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
        
        let data = DateConverter.stringToDate('11/05/2021')

        let negociacao =  new Negociacao(
            data,
            this._inputQuantidade.value, 
            this._inputValor.value
        )

        console.log(negociacao.data)
        console.log(DateConverter.dateToString(negociacao.data))
    }
 


}