const nominate = ['rock','scissors','paper'];

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();  
  if (nominate.includes(userInput)){
    return userInput;
  }else{
    console.log('error');
  }
};

function getComputerChoice(){
  randomNumber = Math.floor(Math.random()*3);
  return nominate[randomNumber];
};

function determineWinner(userChoice, computerChoice){
  switch(userChoice){
    case 'bomb':
      return 'User Won';
    case computerChoice:
      return 'tie';
    case 'rock':
      if (computerChoice === 'paper'){
        return 'Computer Won';
      }else{
        return 'User Won';
      };
    case 'paper':
     if(computerChoice === 'scissors'){
        return 'Computer Won';
      }else{
        return 'User Won';
    };
    case 'scissors':
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
  console.log('userChoice     : ' + userChoice);
  console.log('computerChoice : ' + computerChoice);
  console.log('Winner         : '  +determineWinner(userChoice, computerChoice));
}

playGame('paper');

