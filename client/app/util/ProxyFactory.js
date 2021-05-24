class ProxyFactory{

    static create(object, props, trap){

        return new Proxy(object, {

            //INTERCEPTA MÉTODOS
            get(target, prop, receiver){

                if( typeof(target[prop]) == typeof(Function) && props.includes(prop)){

                    return function(){  

                        target[prop].apply(target, arguments) // chama o método e passa os parametros à ele se precisar
                        trap(target) // atualiza a view com o objeto
                    }
                } else {

                    return target[prop]
                }
            },
        
            //INTERCEPTA propriedade SET
            set(target, prop, value, receiver){

                const updated = Reflect.set(target, prop, value) // o valor deve ser setado priemeiro antes de chamar o método que atualiza a view
                if(props.includes(prop)){

                    trap(target) // atualiza a view com objeto
                }
                return updated
            }

            
        })


    }

}