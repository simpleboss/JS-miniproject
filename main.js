const team = {
    _players: [
        {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
        }
    ],
    _games: [
        {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
        }
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(firstName, lastName, age){
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this.players.push(player);
    },
    addGame(opponentName,yourTeamPoints,opponentTeamPoints){
        let game ={
            opponent: opponentName,
            teamPoints: yourTeamPoints,
            opponentPoints: opponentTeamPoints
        }
        this.games.push(game);
    }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

team.addGame('Vietnam',20,30);
team.addGame('Japan',10,4);
team.addGame('USA',90,40);

console.log(team.players);
console.log(team.games);
