class Negociacoes {

    constructor(){

        this._negociacoes = []
    }

    adiciona(negociacao){

        return this._negociacoes.push(negociacao)
    }

    paraArray(){

        // muda a referencia do array para o array copiado e impede que a lista original seja alterada
        return [].concat(this._negociacoes)
    }

}