
const team = {

    _players: [
        {firstName: 'Pablo', lastName: 'Sanchez', age: 11}

    ],
    _games: [
        {oppoent:'Bronco', teamPoints: 42, opponentPoints: 27}
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        
        const player = {
            firstName,
            lastName,
            age,
        }

        this._players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {

        const game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        
        this._games.push(game);
    }

};




team.addPlayer('Rick', 'Randy', 12);
team.addPlayer('Charles', 'Buck', 13);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//console.log(team.players);

team.addGame('rams', 57, 25);
team.addGame('raiders', 10, 7);
team.addGame('bears', 21, 32);

//console.log(team.players);
//console.log(team.games);

team.specialize = 'blue'


