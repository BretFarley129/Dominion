/*--------------------------------------------------------
File to test individual cards and interactions
--------------------------------------------------------*/

var Player = require('./classes/player.js');
var Deck = require('./classes/deck.js');
var Card = require('./classes/card.js');
var Money = require('./classes/sets/base/money.js');
var Victory = require('./classes/sets/base/victory.js');
var Dominion_1st = require('./classes/sets/dominion/1st_edition.js');

for (var i = 1; i <= 4; i ++){
    var test1 = new Money(i);
    test1.display();
}
for (var i = 1; i <= 5; i ++){
    var test2 = new Victory(i);
    test2.display();
}
for (var i = 1; i <= 25; i ++){
    var test3 = new Dominion_1st(i);
    test3.display();
    test3.play();
}