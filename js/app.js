// Create a Guessing game. Let users guess a number.

const number = 100;

let guessNum = (prompt("guess a number"));
// if statement of the correct number
if ( guessNum === 100){
    alert("Gracious, Obrigados gringo !!!")
}
// elseif of the wrong number
else if (guessNum < number){
    alert("try again mate: the number is greater than" +   " the number you guessed mate !")
    
}
// another else if > number
else if(guessNum > number){
    alert("No way this is outragious mate LOL ! come down")
    
}

// else for none of both guessingNumber nor if or elseif
else {
    alert("You should think of a valid number")
}
