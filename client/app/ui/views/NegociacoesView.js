class NegociacoesView extends View{

    // REMOVENDO PARA PEGAR DE HERANCA
    // constructor(elemento){

    //     let $ = document.querySelector.bind(document)
    //     this._elemento = $(elemento)
    // }


    template(model){

        return`
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.paraArray().map(item => 
                        `
                            <tr>
                                <td>${DateConverter.dateToString(item.data)}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                                <td>${item.volume}</td>
                            </tr>
                        `
                    ).join('')}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td colspan="3">TOTAL</td>
                        <td>${model.volumeTotal}</td>
                    </tr>
                </tfoot>
            </table>
        `
    }

    //REMOVENDO PARA PEGAR DE HERANCA
    // update(model){

    //     return this._elemento.innerHTML = this.template(model)
    // }
}