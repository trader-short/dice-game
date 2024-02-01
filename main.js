var playerName1;
var playerName2;
var roundLimit = 5;
var roundNumber = 1;
var score1 = 0;
var score2 = 0;

function promptForNumber() {
    let roundInput;
  
    // Continue prompting until a valid numeric value is provided
    while (true) {

        roundInput = prompt("Please enter number of rounds:", roundLimit);
  
      // Check if the input is a valid number
      if (roundInput === null) {
        // If the user clicks 'Cancel', break out of the loop
        break;
      } else {
        // Convert the input to a number
        const numericValue = parseFloat(roundInput);
  
        // Check if the conversion was successful and the input is a number
        if (!isNaN(numericValue)) {
          // Update the global variable and break out of the loop
          roundLimit = numericValue;
          break;
        } else {
          // If the input is not a valid number, ask the user again
          alert("Invalid input. Please enter a valid number.");
        }
      }
    }
  }
  

function updateHeaderWithUserName() {

    promptForNumber()

    // Prompt for the players' name
    playerName1 = prompt("Please enter player1 name:");
    playerName2 = prompt("Please enter player2 name: ");

    if (playerName1 && playerName2) {
        document.body.style.display = 'block';
        document.getElementById("player1").innerHTML = playerName1
        document.getElementById("player2").innerHTML = playerName2
      
    } else {
        alert("Please enter valid names");
        updateHeaderWithUserName()
    }
  }

// Call the function when the page is loaded
window.onload = function() {
    updateHeaderWithUserName();
  };


function rollDice() {
    var random1 = Math.floor(Math.random()*6) + 1
    var random2 = Math.floor(Math.random()*6) + 1

    document.querySelector("img#dice1").src = "images/dice" + random1 + ".png" 
    document.querySelector("img#dice2").src = "images/dice" + random2 + ".png" 

    if (roundNumber <= roundLimit) {


        if (random1 > random2) {
            document.getElementById("announce").innerHTML = "Round " + roundNumber + " winner: " + playerName1;
            score1 += 1;
            document.getElementById("scoreboard").innerHTML = score1 + "-" + score2;
        } else if (random2 > random1) {
            document.getElementById("announce").innerHTML = "Round " + roundNumber + " winner: " + playerName2;
            score2 += 1;
            document.getElementById("scoreboard").innerHTML = score1 + "-" + score2;


        } else {
            document.getElementById("announce").innerHTML = "Round " + roundNumber +  ": It's a draw!";
            score1 += 1;
            score2 += 1;
            document.getElementById("scoreboard").innerHTML = score1 + "-" + score2;

        }

        roundNumber += 1;

    } else {

        if (score1 > score2) {
            var msg =  playerName1 + " wins by " + score1 + "-" + score2;
        } else if (score1 < score2 ) {
            var msg = playerName2 + " wins by " + score2 + "-" + score1;
        } else {
            var msg = "Score level between " + playerName1 + " and " + playerName2;
        }
        
        alert(msg);
    }

}

function reloadPage() {
    location.reload()
}
