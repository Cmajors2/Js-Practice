
const team = {

  _players: [{
   fistName: 'Pablo',
   LastName: 'Sanchez',
   age: 11
  }],
  _games: [{
   opponent: 'Broncos',
   teamPoints: '42',
   opponentPoints: '27'
  }
  ],

  get players() {
   return this._players;
  },

  get games() {
   return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
   let player = {
    firstName,
    lastName,
    age,
   };

    this.players.push(player);
  }
};


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer()
//console.log(team.players);