
  //criar bolinha
let raio = 7.5;
let xBolinha = 100;
let yBolinha = 200;
let diametro = raio * 2;

//velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//minha raquete
let xRaquete = 5;
letyRaquete = 150;

//placar oponente
let xOponente = 585;
let yOponente = 150;

//placar
let MeusPontos = 0;
let pontosOponentes = 0;


let dificuladade = "Normal";
let trilha,ponto,raqueatda;

function preload (){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("trilha.mp3")
  raquetada = loadSound("raquetada.mp3")
}
 
function setup (){
  creatCanvas(600,400)
  trilha.loop()
}
function setup (){
  createCanvas(600, 400);
}
function draw(){
  background(0);
  movimentoBolinha();
  raquetes(xRaquetes,yRaquete);
  raquetes(xRaqueteOponente,yRaqueteOponente);
npc(dificuldade);
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10}
    
  if(keyIsDown(DOWN_ARROW)){
    yRAquete += 10}
  
  if(xBolinha -raio < xRaquete + 10 &
    yBolinha -raio < yRaquete + 90 &
    yBolinha +raio > *= -1;
    voleciad)
  }
function movimentoBolinha(){
  circle(xBolinha,yBolinha,diametro);
  
  xBolinha += volicidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  if(xBolinha + raio > width || xBolinha-raio < 0){velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > width || yBolinha-raio < 0){
    velocidadeYBolinha *= -1}}

