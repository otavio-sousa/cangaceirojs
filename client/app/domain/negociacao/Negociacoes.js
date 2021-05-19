class Negociacoes {

    constructor(updateView){

        this._negociacoes = []
        // recebe o this de negociacaoController
        // this._contexto = contexto
        // recebe um método de uma instancia de propriedade de negociacaoController
        this._updateView = updateView
        Object.freeze(this)
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao)

        // atualizando view com call()
        // call oda funcao js tem
        // os parametros são .call(contexto do this, o parametro recebido)
        // this._updateView.call(this._contexto, this)
        this._updateView(this)
        return 
    }

    esvazia(){

        this._negociacoes.length = 0
        // this._updateView.call(this._contexto, this)
        this._updateView(this)
        return 
    }

    paraArray(){

        // muda a referencia do array para o array copiado e impede que a lista original seja alterada
        return [].concat(this._negociacoes)
    }

    get volumeTotal(){

        // let total = 0
        // for (let i in this._negociacoes){

        //     total += this._negociacoes[i].volume
        // }

        return this._negociacoes.reduce((total, item) => total += item.volume , 0)
    }

}