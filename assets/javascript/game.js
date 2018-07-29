var wins = 0;
var losses = 0;
var score = 0;
var randomNumber;
var crystalValueGrey, crystalValueBlue, crystalValuePink, crystalValuePurple;
$(document).ready(function() {
    randomNumberGenerator();

    $("#grey-crys").on("click", function(){
        score = score + crystalValueGrey;       //add crystal value to score
        $("#scoreValue").text(score);           //display score
        win_loss();
    }); //close onclick() grey-crys

    $("#blue-crys").on("click", function(){
        score = score + crystalValueBlue;       //add crystal value to score
        $("#scoreValue").text(score);           //display score
        win_loss();
    }); //close onclick() blue-crys

    $("#pink-crys").on("click", function(){
        score = score + crystalValuePink;       //add crystal value to score
        $("#scoreValue").text(score);           //display score
        win_loss();
    }); //close onclick() pink-crys

    $("#purple-crys").on("click", function(){
        score = score + crystalValuePurple;       //add crystal value to score
        $("#scoreValue").text(score);           //display score
        win_loss();
    }); //close onclick() purple-crys

    

}); //close document.ready()

function randomNumberGenerator(){
    //generate random number between 19 to 120 & display it
    randomNumber = Math.floor(Math.random()*(120-19+1)+19);
    $("#random").text(randomNumber);
    //generate and assign random value to each crystal
    crystalValueGrey = Math.floor(Math.random()*(12-1+1)+1);
    // enter code to assign
    crystalValueBlue = Math.floor(Math.random()*(12-1+1)+1);
    // enter code to assign
    crystalValuePink = Math.floor(Math.random()*(12-1+1)+1);
    // enter code to assign
    crystalValuePurple = Math.floor(Math.random()*(12-1+1)+1);
    // enter code to assign
}
function win_loss(){
    if(score === randomNumber){
        wins = wins + 1;
        alert("You win.");
        console.log("i am in if");
        reset();
    }
    else if(score > randomNumber){
        losses = losses + 1;    
        alert("You lose.");
        console.log("i am in else");
        reset();
    }
}
function reset(){
    score = 0;
    $("#scoreValue").text(score);
    randomNumberGenerator();
}
