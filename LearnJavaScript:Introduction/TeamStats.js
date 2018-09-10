const team = {
    _players: [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }, {
        firstName: "Kobe",
        lastName: "Bryan",
        age: 40
    }, {
        firstName: "Lebron",
        lastName: "James",
        age: 40
    }],
    get players() {
        return this._players
    },
    _games: [{
        opponent: "Cavaliers",
        teamPoints: 42,
        opponentPoints: 27
    }, {
        opponent: "Lakers",
        teamPoints: 50,
        opponentPoints: 40
    }, {
        opponent: "Bulls",
        teamPoints: 63,
        opponentPoints: 32
    }],
    get games() {
        return this._games
    },
    addPlayer(firstName, lastName, age) {
        let playerObject = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(playerObject)
    },
  	addGame(opponentName,teamPoints,opponentPoints) {
      	let gameObject = {
          	opponentName: opponentName,
          	teamPoints: teamPoints,
          	opponentPoints: opponentPoints
        };
      	this._games.push(gameObject)
    },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Padres', 8, 5);
team.addGame('Dodges', 100, 5);
team.addGame('Mariners', 1, 5);
console.log(team);
