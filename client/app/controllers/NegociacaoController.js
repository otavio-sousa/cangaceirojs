class NegociacaoController {

    constructor(){

        const self = this // guarda o contexto
        const $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoes = new Proxy(new Negociacoes(), {

            get(target, prop, receiver){

                if(typeof(target[prop] == typeof(Function)) && ['adiciona', 'esvazia'].includes(prop)){

                    return function(){

                        target[prop].apply(target, arguments) // pega o método e passa os parametros à ele se precisar
                        self._negociacoesView.update(target) // atualiza a view com a instancia de lista
                    }
                } else {

                    return target[prop]
                }
            }
        })

        this._negociacoesView = new NegociacoesView('#negociacoes')
        this._negociacoesView.update(this._negociacoes)

        this._mensagem = new Proxy(new Mensagem(), {

            set(target, prop, value, receiver){

                Reflect.set(target, prop, value) // o valor deve ser setado priemeiro antes de chamar o método que atualiza a view
                self._mensagemView.update(target)
                return target[prop] == value
            }
        })
        this._mensagemView = new MensagemView('#mensagem')
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event){

        event.preventDefault()  

        this._negociacoes.adiciona(this._criaNegociacao())
        this._negociacoes.paraArray().length = 0
        
        this._mensagem.texto = 'Negociação criada'
        // this._mensagemView.update(this._mensagem)
        this._limpaFormulario()
    }

    apaga(event){

        event.preventDefault()

        this._negociacoes.esvazia()

        this._mensagem.texto = 'Negociações apagadas'
        // this._mensagemView.update(this._mensagem)

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