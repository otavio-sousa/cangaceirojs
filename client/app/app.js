// o app.js inicia nossa aplicão

const negociacaoController = new NegociacaoController()

const formulario = document.querySelector('form')

// formulario.addEventListener('submit', function(event){
//     negociacaoController.adiciona(event)
// })
// conseguimos escrever dessa forma sem declarar o event
formulario.addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController))