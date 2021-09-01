console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Ted',
    hand: []
  },
  {
    name: 'Bill',
    hand: []
  },
  {
    name: 'Sarah',
    hand: []
  },
  {
    name: 'John',
    hand: []
  }
];

const cardDeck = [
  {
    rank: 'Ace',
    suit: 'clubs'
  },
  {
    rank: 'Ace',
    suit: 'diamonds'
  },
  {
    rank: 'Ace',
    suit: 'hearts'
  },
  {
    rank: 'Ace',
    suit: 'spades'
  },
  {
    rank: '2',
    suit: 'clubs'
  },
  {
    rank: '2',
    suit: 'diamonds'
  },
  {
    rank: '2',
    suit: 'hearts'
  },
  {
    rank: '2',
    suit: 'spades'
  },
  {
    rank: '3',
    suit: 'clubs'
  },
  {
    rank: '3',
    suit: 'diamonds'
  },
  {
    rank: '3',
    suit: 'hearts'
  },
  {
    rank: '3',
    suit: 'spades'
  },
  {
    rank: '4',
    suit: 'clubs'
  },
  {
    rank: '4',
    suit: 'diamonds'
  },
  {
    rank: '4',
    suit: 'hearts'
  },
  {
    rank: '4',
    suit: 'spades'
  },
  {
    rank: '5',
    suit: 'clubs'
  },
  {
    rank: '5',
    suit: 'diamonds'
  },
  {
    rank: '5',
    suit: 'hearts'
  },
  {
    rank: '5',
    suit: 'spades'
  },
  {
    rank: '6',
    suit: 'clubs'
  },
  {
    rank: '6',
    suit: 'diamonds'
  },
  {
    rank: '6',
    suit: 'hearts'
  },
  {
    rank: '6',
    suit: 'spades'
  },
  {
    rank: '7',
    suit: 'clubs'
  },
  {
    rank: '7',
    suit: 'diamonds'
  },
  {
    rank: '7',
    suit: 'hearts'
  },
  {
    rank: '7',
    suit: 'spades'
  },
  {
    rank: '8',
    suit: 'clubs'
  },
  {
    rank: '8',
    suit: 'diamonds'
  },
  {
    rank: '8',
    suit: 'hearts'
  },
  {
    rank: '8',
    suit: 'spades'
  },
  {
    rank: '9',
    suit: 'clubs'
  },
  {
    rank: '9',
    suit: 'diamonds'
  },
  {
    rank: '9',
    suit: 'hearts'
  },
  {
    rank: '9',
    suit: 'spades'
  },
  {
    rank: '10',
    suit: 'clubs'
  },
  {
    rank: '10',
    suit: 'diamonds'
  },
  {
    rank: '10',
    suit: 'hearts'
  },
  {
    rank: '10',
    suit: 'spades'
  },
  {
    rank: 'Jack',
    suit: 'clubs'
  },
  {
    rank: 'Jack',
    suit: 'diamonds'
  },
  {
    rank: 'Jack',
    suit: 'hearts'
  },
  {
    rank: 'Jack',
    suit: 'spades'
  },
  {
    rank: 'Queen',
    suit: 'clubs'
  },
  {
    rank: 'Queen',
    suit: 'diamonds'
  },
  {
    rank: 'Queen',
    suit: 'hearts'
  },
  {
    rank: 'Queen',
    suit: 'spades'
  },
  {
    rank: 'King',
    suit: 'clubs'
  },
  {
    rank: 'King',
    suit: 'diamonds'
  },
  {
    rank: 'King',
    suit: 'hearts'
  },
  {
    rank: 'King',
    suit: 'spades'
  },
  {
    rank: 'Joker',
    suit: 'black'
  },
  {
    rank: 'Joker',
    suit: 'red'

  }

];

function shuffleDeck(cardDeck) {
  for (let i = cardDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardDeck[i];
    cardDeck[i] = cardDeck[j];
    cardDeck[j] = temp;
  }
}

function dealCards(players, cardDeck) {
  for (let i = 0; i < players.length; i++) {
    players[i].hand = cardDeck[i];
  }

}

const points = {
  Ace: 11,
  King: 10,
  Queen: 10,
  Jack: 10,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2
};

function play() {
  const gameArr = [];
  let pointsObj = {};
  shuffleDeck(cardDeck);
  dealCards(players, cardDeck);

  for (let i = 0; i < players.length; i++) {

    for (const property in points) {
      if (property === players[i].hand.rank) {
        pointsObj = {
          name: players[i].name,
          points: points[property]
        };
      }
    }
    gameArr.push(pointsObj);
  }

  const winner = {
    name: '',
    points: 0
  };

  for (let j = 0; j < gameArr.length; j++) {
    if (gameArr[j].points > winner.points) {
      winner.name = gameArr[j].name;
      winner.points = gameArr[j].points;
    }
  }

  console.log(winner.name);

}

play();
