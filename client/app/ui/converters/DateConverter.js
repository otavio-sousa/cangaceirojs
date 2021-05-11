// CLASS ESTÁTICA 
// para classes que não precisam ter propriedades
// declarar a sintaxe static antes dos metodos
// isso faz com que possamos chamar a class sem criar uma nova instancia
class DateConverter{

    // constructor que lança um erro previnindo o instanciamento dessa class
    constructor(){

        throw new Error('Class can not to be instanced')
    }

    static dateToString(date){

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    static stringToDate(string){

        // .test é para testar se o parametro passado é de acordo com a expressao regular
        if (!/^\d{4}-\d{2}-\d{2}$/.test(string)) 
            throw new Error('Date format is aaaa-mm-dd')

        return new Date(...string
            .split('-')
            .map((item, indice) => {
                return item - indice % 2
            }))
        
    }
}