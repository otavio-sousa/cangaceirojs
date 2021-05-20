class Negociacoes {

    constructor(){

        // this._updateView = updateView
        this._negociacoes = []
        Object.freeze(this)
    }

    adiciona(negociacao){

        
        //this._updateView(this)
        return this._negociacoes.push(negociacao)
    }

    esvazia(){

        // this._updateView(this)
        return this._negociacoes.length = 0
    }

    paraArray(){

        return [].concat(this._negociacoes)
    }

    get volumeTotal(){

        return this._negociacoes.reduce((total, item) => total += item.volume , 0)
    }

}