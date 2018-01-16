var Player = require('./player.js');
var Card = require('./card.js');
module.exports = class Deck{
    constructor(){
        this.reset();
        this.shuffle();
    }
    reset(){
        this.content = []
        for(var i = 0; i < 52; i ++){
            var suit;
            if(i < 13){
                suit = "Diamonds";
            }
            else if(i < 26){
                suit = "Spades";
            }
            else if(i < 39){
                suit = "Clubs";
            }
            else{
                suit = "Hearts";
            }
            var value = (i%13)+1
            this.deck.push(new Card(suit, value))
        }
        return this;
    }
    display(){
        for(var i = 0; i< this.deck.length; i ++){
            console.log(this.deck[i].display,'of',this.deck[i].suit)
        }
    }
    shuffle(){
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    drawFrom(){
        return this.deck.pop();
    }
}

/*---------------------------------------------------------------------------
As it stands right now, this current deck setup will not work for Dominion.
If using this for the kingdom supplies:
    -initialize_supply(card){
        
    }
---------------------------------------------------------------------------*/
