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
        this._negociacoes = new Negociacoes()
        this._negociacoesView = new NegociacoesView('#negociacoes')
        this._negociacoesView.update(this._negociacoes)
    }

    adiciona(event){

        event.preventDefault()  

        this._negociacoes.adiciona(this._criaNegociacao())
        this._negociacoes.paraArray().length = 0
        this._negociacoesView.update(this._negociacoes)
        
        console.log(this._negociacoes.volumeTotal)
        this._limpaFormulario()
    }

    _criaNegociacao(){

        return new Negociacao(
            DateConverter.stringToDate(this._inputData.value),
            this._inputQuantidade.value, 
            this._inputValor.value
        )
    }

    _limpaFormulario(){

        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0
        this._inputData.focus()
    }
 


}