var Player = require('./player.js');
var Card = require('./card.js');
module.exports = class Deck{
    constructor(){
        this.content = []
    }
    setPile(card){
        for(var i = 0; i < card.stack; i++){
            this.content[i] = card;
        }
    }
    display(){
        for(var i = 0; i< this.content.length; i ++){
            this.content[i].display();
            console.log(i+1)
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
