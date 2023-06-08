function generateRandomDiceNumber ()
{
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDice = "dice" + randomNumber + ".png";
    var randomImageSrc = "images/" + randomDice;
    return randomImageSrc ;
}


var firstNumber = generateRandomDiceNumber () ;
var secondNumber = generateRandomDiceNumber () ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , firstNumber);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , secondNumber);

if (firstNumber > secondNumber)
{
    document.querySelector("h1").innerHTML = "Player 1 Won 😎";
}
else if (firstNumber < secondNumber)
{
    document.querySelector("h1").innerHTML = "Player 2 Won 😎";
}
else {
    document.querySelector("h1").innerHTML = "Draw 😎";
}



