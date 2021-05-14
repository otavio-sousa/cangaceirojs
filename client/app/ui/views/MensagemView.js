class MensagemView extends View {

    // REMOVENDO PARA PEGAR DE HERANCA
    // constructor(elemento){

    //     let $ = document.querySelector.bind(document)
    //     this._elemento = $(elemento)
    // }


    template(model){

        // valores iguais a false -> string em branco, 0, null, undefined
        return `

        ${model.texto ?

            `<div class="alert alert-primary">
                ${model.texto}
            </div>`
        :
            `<div id="mensagem"></div>`
        }
        `
    }

    // REMOVENDO PARA PEGAR DE HERANCA
    // update(model){

    //     return this._elemento.innerHTML = this.template(model)
    // }
}