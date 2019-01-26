// set and generate two random numbers
var rand1 = Math.floor(Math.random()*6);
rand1 = rand1 + 1;
console.log(rand1);


var rand2 = Math.floor(Math.random()*6);
rand2 = rand2 + 1;
console.log(rand2);

// store the  random number as an image

var randomdice1 = "images/dice" + rand1 + ".png";
var randomdice2 = "images/dice" + rand2 + ".png";

// change the image by changing src
var new1 = document.querySelectorAll("img")[0];
new1.src = randomdice1;

var new2 = document.querySelectorAll("img")[1];
new2.src = randomdice2;

// change the heading

if(rand1>rand2){
    // player1 wins
 document.querySelector("h1").innerHTML = "🚩Player 1 wins!";

}

else if(rand1 == rand2){
    document.querySelector("h1").innerHTML = "Its a draw";
}
else{
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}