/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt(prompt("Enter a number greater than or equal to 0 for your minimum number: "));
while (isNaN(intMin)||intMin <0) {
    intMin = parseInt(prompt("Oh no! Your number choice is invalid! Enter a number greater than or equal to 0 for your minimum number: "));
}

intMax = parseInt(prompt("Enter a number that is at least " + (intMin+2) + "for your maximum number: "));
while (isNaN(intMax) ||intMax < (intMin + 2)) {
    intMax = parseInt(prompt("Oh no! Your number is invalid. Please enter a number that is at least " + (intMin+2) + "for your maximum number: "));
}

intGuess = parseInt(prompt("Enter a number between " + intMin + " and " + intMax));
while (isNaN(intGuess)|| intGuess < intMin || intGuess > intMax) {
    intGuess = parseInt(prompt("What you entered is not valid. Please enter a number between " + intMin + " and " + intMax));
}

intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);
intCount = 1;
while (intGuess!= intRandom) {
    if (intGuess < intRandom) {
       alert("Your number geuss of " + (intGuess) + "was too low");

	}
            else
        {
            alert("Your choice of " + (intGuess) + "was too high");
        }

               intCount++;
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high, please guess again"));
        while (inNaN(intGuess)|| intguess < intMin || intGuess > intMin) {
            intMin = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and " + intMax));
        }
    }

alert ("Congrats, you guessed the random number of" + intRandom + "in only" + inCount + "attempts!");
