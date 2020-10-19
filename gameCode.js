var player1 = "Player1";
var player2 = "Player2";
var mySound1 = new Audio("sound1.mp3");
var mySound2 = new Audio("sound11.mp3");
var mySound3 = new Audio("sound2.mp3");

function insertNames() {
  player1 = prompt("Enter Player#1 name");
  player2 = prompt("Enter player#2 name");
  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}
function play() {
var mySound1 = new Audio("sound1.mp3");
var mySound2 = new Audio("sound11.mp3");
var mySound3 = new Audio("sound2.mp3");
mySound1.play();
mySound2.play();
mySound3.play();
}
function rollingDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random()* 5)+ 1;
    var randomNumber2 = Math.floor(Math.random()* 5)+ 1;

    document.querySelector(".img1").setAttribute("src","dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src","dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
      mySound3.play();
    }

    else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML= (player2 + "'s WINS!");
          mySound1.play();
          mySound2.play();
    }

    else {
      document.querySelector("h1").innerHTML= (player1 + "'s WINS!");
          mySound1.play();
          mySound2.play();
    }
  }, 1000);
}
