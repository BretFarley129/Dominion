var Player = require('./classes/player.js');
var Deck = require('./classes/deck.js');
var Card = require('./classes/card.js');
var d1 = new Deck;
d1.display()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
var Bret = new Player('Bret', d1);
Bret.draw(5).displayHand();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
Bret.discard(4).discardHand().displayHand();
