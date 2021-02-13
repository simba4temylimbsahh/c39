var database;
var gameState = 0, playerCount;
var form, game, player;
var allPlayers;
var c1, c2, c3, c4, car
var track

function preload(){

car1 = loadImage("images/car1.png")
car2 = loadImage("images/car2.png")
car3 = loadImage("images/car3.png")
car4 = loadImage("images/car4.png")
track = loadImage("images/track.jpg")
gameOver = loadImage("images/gameover.jpg")
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);
  game = new Game();
  game.gameState();
  game.start();

 
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  if(gameState === 2){
game.end()
  }
}



