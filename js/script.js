function displayWinner(randomNumber1,randomNumber2){
    if (randomNumber1 > randomNumber2) {
            document.querySelector(".heading").innerHTML = "<i class='fab fa-font-awesome-flag  flag'></i>    Player One Wins";
    } 
    else if (randomNumber1 === randomNumber2) {
            document.querySelector(".heading").textContent = "Draw";
    } 
    else {
            document.querySelector(".heading").innerHTML = "Player Two Wins   <i class='fab fa-font-awesome-flag flag'></i>";
    }
}
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImg1="images/dice"+randomNumber1+".png";

var randomDiceImg2="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomDiceImg1 )

document.querySelector(".img2").setAttribute("src", randomDiceImg2 )

displayWinner(randomNumber1,randomNumber2);

