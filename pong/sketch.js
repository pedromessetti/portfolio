//Variáveis da Bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 15
let raio = diametro/2
//Velocidade da Bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

//Variáveis da Raquete 1
let comprimentoRaquete = 10
let alturaRaquete = 90
let xRaquete1 = 5
let yRaquete1 = 150

//Variáveis da Raquete 2
let xRaquete2 = 585
let yRaquete2 = 150
let velocidadeYOponente

//Variáveis do Placar
let pontosPlayer1 = 0
let pontosPlayer2 = 0

//Funções Principais
function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0)
  mostraBolinha()
  mostraRaquete(xRaquete1, yRaquete1)
  mostraRaquete(xRaquete2, yRaquete2)
  movimentaBolinha()
  colisaoBolinha()
  movimentaRaquete1()
  movimentaRaquete2()
  colisaoRaquete(xRaquete1+5, yRaquete1+5)
  colisaoRaquete(xRaquete2-5, yRaquete2-5)
  placar()
  marcaPonto()
  bug()
}

//Funções de Exibição dos Elementos
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro)
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete)
}

//Funções de Movimento
function movimentaBolinha() {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function movimentaRaquete1() {
  if(keyIsDown(87)) {
    if(podeMoverCima()) {
      yRaquete1 -= 10
    }
  }
  if(keyIsDown(83)) {
    if(podeMoverBaixo()) {
      yRaquete1 += 10
    }
  }
}

function movimentaRaquete2() {
  velocidadeYOponente = yBolinha - yRaquete2 - comprimentoRaquete/2 - 50
  yRaquete2 += velocidadeYOponente
}

function podeMoverBaixo() {
  return yRaquete1 < 350
}

function podeMoverCima() {
  return yRaquete1 > -40
}

//Funções de Colisão
function colisaoBolinha() {
    if (xBolinha+raio > width || xBolinha-raio < 0) {
    velocidadeXBolinha *= -1
  }
  if(yBolinha+raio > height || yBolinha-raio < 0){
    velocidadeYBolinha *= -1
  }
}

let colidiu = false

function colisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha,raio)
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}

//Funções dos Pontos
function placar() {
  stroke(255)
  textAlign(CENTER)
  textSize(30)
  fill(color(255,140,0))
  rect(175,15,50,50)
  fill(255)
  text(pontosPlayer1, 200, 50)
  fill(color(255,140,0))
  rect(375,15,50,50)
  fill(255)
  text(pontosPlayer2, 400, 50)
}

function marcaPonto() {
  if(xBolinha > 592){
     pontosPlayer1++
     }
  if(xBolinha < 8) {
    pontosPlayer2++
  }
}

//Função de Correção de Bug
function bug() {
  if(xBolinha - raio < 0) {
    xBolinha = 23
  }
}