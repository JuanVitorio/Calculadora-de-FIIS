const nome_cota = document.querySelector('#nome-cota')
const preco_cota = Number(document.querySelector('#preco-cota'))
const ult_rendimento = document.querySelector('#ultimo-rendimento')
const quant_cotas = document.querySelector('#quant-cotas')

function calcular(){

  var total = Number(quant_cotas * preco_cota).value
  var b_y = Number(ult_rendimento * preco_cota).value
  var rendimento = Number(total * b_y).value
  var comp_cotas = Number(rendimento / preco_cota).value


}  
console.log(preco_cota)