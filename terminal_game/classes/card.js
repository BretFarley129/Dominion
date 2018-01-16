var Player = require('./player.js');
var Deck = require('./deck.js');
module.exports = class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        if(value == 1){
            this.display = "A";
        }
        else if(value == 11){
            this.display = "J";
        }
        else if(value == 12){
            this.display = "Q";
        }
        else if(value == 13){
            this.display = "K";
        }
        else{
            this.display = String(value);
        }
    }
}