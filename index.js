var randomNumber1 = Math.floor(Math.random()*6)+1;
var r="dice" + randomNumber1  + ".png";
var y="images/" + r;
document.querySelector(".img1").setAttribute("src",y);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var r="dice" + randomNumber2  + ".png";
var y="images/" + r;
document.querySelector(".img2").setAttribute("src",y);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1 Wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player2 Wins";

}
else{
  document.querySelector("h1").innerHTML="DRAW!!!";
}
