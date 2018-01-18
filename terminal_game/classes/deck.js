var Player = require('./player.js');
var Card = require('./card.js');
module.exports = class Deck{
    constructor(){
        this.content = []
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
            this.content.push(new Card(suit, value))
        }
        return this;
    }
    display(){
        for(var i = 0; i< this.content.length; i ++){
            console.log(this.content[i].display,'of',this.content[i].suit)
        }
    }
    shuffle(){
        for (let i = this.content.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.content[i], this.content[j]] = [this.content[j], this.content[i]];
        }
    }
    drawFrom(){
        return this.content.pop();
    }
}

/*---------------------------------------------------------------------------
As it stands right now, this current deck setup will not work for Dominion.
If using this for the kingdom supplies:
    -initialize_supply(card){
        
    }
---------------------------------------------------------------------------*/
