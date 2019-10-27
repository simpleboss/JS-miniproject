const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('error');
    }
  };
  
  function getComputerChoice(){
    randomNumber = Math.floor(Math.random()*2);
    if (randomNumber === 0){
      return 'rock';
    }else if(randomNumber === 1){
      return 'paper';
    }else if(randomNumber === 2){
      return 'scissors';
    }  
  };
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === 'bomb'){
      return 'User Won';
    };
    if (userChoice === computerChoice){
      return 'tie';
    };
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer Won';
      }else{
        return 'User Won';
      };
    };
    if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer Won';
      }else{
        return 'User Won';
      };
    };
    if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer Won';
      }else{
        return 'User Won';
      };
    };
  };
  
  function playGame(userChoice){
    userChoice = getUserChoice(userChoice);
    computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame('bomb');
  