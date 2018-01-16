var Deck = require('./deck.js');
var Card = require('./card.js');

module.exports = class Player{
    constructor(name, deck){

        //name and card possessions
        this.name = name;
        this.deck = deck; //revisit and edit
        this.hand = [];
        this.in_play = [];
        this.discardPile = [];

        //player numerical values
        this.points = 0;
        this.actions = 0;
        this.buys = 0;
        this.turns = 0;
    }

    //normal card game actions
    draw(amt){
        for(var i = 0; i < amt; i++){
            //standard draw
            if(this.deck.content.length > 0){
                this.hand.push(this.deck.drawFrom());
            }
            //no deck nor discard pile
            else if(this.discardPile.length == 0){
                console.log("There are no more cards to draw :(")
                break
            }
            //reshuffle discard into deck
            else{
                while(this.discardPile[0]){
                    this.deck.content.push(this.discardPile.pop());
                    this.deck.shuffle();
                    this.hand.push(this.deck.drawFrom());
                }
            }
        }
        return this;
    }
    displayHand(){
        console.log(`${this.name}'s hand:`)
        for(var i = 0; i < this.hand.length; i++){
            console.log(`${this.hand[i].display} of ${this.hand[i].suit}`)
        }
        return this;
    }
    discard(card){ //Unvisited. might need rework.
        if (card < this.hand.length){
            var dc = this.hand[card];
            console.log(`Discarding ${this.hand[card].display} of ${this.hand[card].suit}`);
            this.discardPile.push(dc);
            this.hand.splice(card, 1);
        }
        else{
            console.log('Invalid hand index. Cannot discard.');
        }
        return this;
    }
    discardHand(){
        while (this.hand[0]){
            this.discardPile.push(this.hand.pop());
        }
        console.log('Hand discarded');
        return this;
    }

    //Dominion specific actions
    endTurn(){ //this will need some editing in the future in order to incorperate duration cards
        this.discardHand();
        while (this.in_play[0]){
            this.discardPile.push(this.in_play.pop());
        }
        console.log('Cards in play discarded');
        return this;
    }
}
