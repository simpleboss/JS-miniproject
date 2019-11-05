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
  const userWinSituation = ['rockscissors','scissorspaper','paperrock'];
  const Choice = userChoice + computerChoice;
  //console.log(Choice);
  //console.log(userWinSituation[2]);
  if (userWinSituation.includes(Choice)){
    return 'User Won';
  } else if (userChoice === computerChoice){
    return 'tie';
  } else {
    return 'Computer Won';
  };
};

function playGame(userChoice){
  userChoice = getUserChoice(userChoice);
  computerChoice = "rock"
  //computerChoice = getComputerChoice();
  console.log('userChoice     : ' + userChoice);
  console.log('computerChoice : ' + computerChoice);
  console.log('Winner         : '  +determineWinner(userChoice, computerChoice));
}

playGame('paper');

