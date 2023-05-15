var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomImage="dice" + randomNumber1 + ".png";
var randomImagesource="images/" + randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);




var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomImage2="dice" + randomNumber2 + ".png";
var randomImagesource2="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER 1 WON THE GAME";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "PLAYER 2 WON THE GAME";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!"
}
