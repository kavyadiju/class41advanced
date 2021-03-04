var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers =0; // added a new line
var form, player, game;
var passedFinish; // added a new line
var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  bronze_img = loadImage("images/bronze.png");// added 3 images
  silver_img = loadImage("images/silver.png");
  gold_img = loadImage("images/gold.png");

  carStart=loadSound("sounds/CarStart.mp3");
  driving=loadSound("sounds/CarDriving.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(200, 200, 255);// added
  if(playerCount === 4 && finishedPlayers === 0){ // additional condition
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers === 4){ // added a block
    game.update(2);
  }
  if(gameState === 2 && finishedPlayers ===4){ // added a condition
    game.displayRanks(); // changed the function name
  }
}
