class NegociacaoController {

    constructor(){

        const $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoes = new Negociacoes(model => {

            // atualizando a view sempre que negociacao for alterada
            // toda vez q acessar o método dessa instancia essa funcao é passado
            this._negociacoesView.update(model)
        })

        this._negociacoesView = new NegociacoesView('#negociacoes')
        this._negociacoesView.update(this._negociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView('#mensagem')
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event){

        event.preventDefault()  

        this._negociacoes.adiciona(this._criaNegociacao())
        this._negociacoes.paraArray().length = 0
        // this._negociacoesView.update(this._negociacoes)
        
        this._mensagem.texto = 'Negociação criada'
        this._mensagemView.update(this._mensagem)
        this._limpaFormulario()
    }

    apaga(event){

        event.preventDefault()

        this._negociacoes.esvazia()
        // this._negociacoesView.update(this._negociacoes)

        this._mensagem.texto = 'Negociações apagadas'
        this._mensagemView.update(this._mensagem)

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