var Player = require('./player.js');
var Card = require('./card.js');
var Deck = require('./deck.js')
var Money = require('./sets/base/money.js');
var Victory = require('./sets/base/victory.js');
var Dominion_1st = require('./sets/dominion/1st_edition.js')

module.exports = class Kingdom{
    constructor(){
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log('starting game')
        this.piles = []
        for (var i = 1; i < 5; i++){
            var pile = new Deck();
            pile.setPile(new Victory(i));
            this.piles.push(pile);
        }
        for (var i = 1; i < 4; i++){
            var pile = new Deck();
            pile.setPile(new Money(i));
            this.piles.push(pile);
        }
        for (var i = 1; i < 11; i++){
            var pile = new Deck();
            pile.setPile(new Money(i));
            this.piles.push(pile);
        }
    }
    display(){
        for ( var i = 0; i < this.piles.length; i++){
            console.log('here')
            this.piles[i].showPile();
        }
    }
}