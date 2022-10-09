"use strict"

function calcular(){

let preco_cota = document.getElementById('preco_cota').value
let ultimo_rendimento = document.getElementById('ultimo_rendimento').value
let quant_cotas = document.getElementById('quant_cotas').value
let resu = document.querySelector('.rendimento')
let resu2 = document.querySelector('.quan_cotas')
let total = 0.0
let rendimento = 0.0
let comp_cotas = 0.0
let dy = 0.0

total = parseFloat(quant_cotas) * parseFloat(preco_cota)
dy = parseFloat(ultimo_rendimento) / parseFloat(preco_cota)
rendimento = total * dy
comp_cotas = rendimento / preco_cota

if(preco_cota == '' || ultimo_rendimento == '' || quant_cotas == ''){
  alert('Preencha todos os campos')
}else{
  if(rendimento == 0){
  alert("Verifique se colocous o valores com vírgulas ',' ao invés de pontos '.'")
}else{
  resu2.innerHTML = comp_cotas.toFixed(2)
  resu.innerHTML = rendimento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
}
}