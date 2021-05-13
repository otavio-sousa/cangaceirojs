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

    get volumeTotal(){

        // let total = 0
        // for (let i in this._negociacoes){

        //     total += this._negociacoes[i].volume
        // }

        return this._negociacoes.reduce((total, item) => total += item.volume , 0)
    }

}