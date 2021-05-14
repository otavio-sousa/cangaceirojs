class View{


    constructor(elemento){

        const $ = document.querySelector.bind(document)
        this._elemento = $(elemento)
    }

    template(model){

        throw new Error('template() method must be implemented')
    }

    update(model){

        return this._elemento.innerHTML = this.template(model)
    }
}