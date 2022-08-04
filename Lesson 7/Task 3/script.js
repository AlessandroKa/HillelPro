function guessingGame(gameAttemps) {
    let randomNum = Math.floor(Math.random() * 11);
    let counter = 0;
    let guess = 0;
    return function game(userAttempt) {
        if (counter === gameAttemps) {
            console.log(`No more guesses the answer was ${randomNum}! Please start a new game.`);
            return;
        }
        if (guess === 1) {
            console.log("You know the answer. What do you want from me?");
            return (counter = gameAttemps);
        } else {
            if (userAttempt === randomNum) {
                console.log("You got it!");
                return (guess = 1);
            } else if (userAttempt > randomNum) {
                console.log("Your guess is too high!");
            } else if (userAttempt < randomNum) {
                console.log("Your guess is too low!");
            }
        }
        return counter++;
    };
};

let game2 = guessingGame(5);
game2(3);
game2(4);
game2(5);
game2(7);
game2(0);
game2(10);
game2(9);
game2(6);
game2(8);
game2(2);