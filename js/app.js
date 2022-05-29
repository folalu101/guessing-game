// Create a Guessing game. Let users guess a number.


const number = 100;

let guessNum = parseInt(prompt("Let see how smart you are mate. Now guess the right number"));
// if statement of the correct number
if (guessNum ===number){
    alert("Gracious, Obrigados gringo !!!")
}

// else if Not a number (NAN)
else if(guessNum =NaN){
    alert("Kindly guess an actual number not a word !")
}

// // else if guessNum greater than 800 and less than 9000
// else if( guessNum => 800 && guessNum <= 9000){
//     alert("Bro Chill we are not in ukraine")
// }


// elseif < number
else if (guessNum < number){
    alert("try again mate: the number is greater than" +   " the number you guessed mate !")
    
}
// another  else if > number
else if(guessNum > number){
    alert("No way this is outragious mate LOL ! come down")
    
}

// else for none of both guessingNumber nor if or elseif
else {
    alert("You should think of a valid number")
}
