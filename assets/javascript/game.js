
var playerGuess
var wins = 0;
var Losses = 0;
var guessesLeft = 9;
var alreadyGuessed = [];
var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 document.onkeyup = function(event) {
        var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

        var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        alreadyGuessed.push(playerGuess);

    
  
    if (playerGuess === computerGuess){
        wins++;
        alert("You're a Physic!");
        guessesLeft = 9;
        alreadyGuessed.length = 0;
    }
    else {
        
        guessesLeft--;
        if (guessesLeft === 0) {
            alreadyGuessed.length = 0;
            alert("Unlucky... Try again human!");
        }
    if (guessesLeft === 0) {
        Losses++;
        guessesLeft = 9;
    }
    } 

 var html = 
 "<h1> THE PSYCHIC GAME<h1>" +
     "<p>Wins: " + wins + "</p>" +
     "<p>Losses: " + Losses + "</p>" +
     "<p>Guesses left: " + guessesLeft + "</p>" +
     "<p> Your guesses so far: " + alreadyGuessed + "</p>";
     document.querySelector('#game').innerHTML = html;
     };
       

