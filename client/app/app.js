const negociacaoController = new NegociacaoController()

const formulario = document.querySelector('form')
const apagar = document.querySelector('#botao-apaga')

formulario.addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController))
apagar.addEventListener('click', negociacaoController.apaga.bind(negociacaoController))
