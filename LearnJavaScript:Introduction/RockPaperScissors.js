const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'){
        return userInput;
    } else if (userInput === 'paper'){
        return userInput;
    } else if (userInput === 'scissors'){
        return userInput;
    } else{
        return console.log('Error: Invalid input');
    }
};

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return 'You\'ve tied with the computer';
    } else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The computer won';
        } else{
            return 'You\'ve won';
        }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'The computer won';
        } else{
            return 'You\'ve won';
        }
    } else if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'The computer won';
        } else{
            return 'You\'ve won';
        }
    }
};

const playGame = (choice) => {
    userChoice = getUserChoice(choice);
    computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice))
};

let choice = 'scissors';

playGame(choice);
