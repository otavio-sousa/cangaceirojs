// NIND -> data binding (associação de dados)
// associa os dados do model com a apresentação da view
class Bind{

    constructor(model, view, ...props){
        
        const proxy = ProxyFactory.create(
            model,
            props,
            model => view.update(model)
        )
        view.update(model)

        return proxy

    }
}