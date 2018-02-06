var Deck = require('./deck.js');
var Card = require('./card.js');

module.exports = class Player{
    constructor(name, supply){

        //name and card possessions
        this.name = name;
        this.supply = supply;
        this.deck = new Deck();
        this.hand = [];
        this.in_play = [];
        this.discardPile = [];

        //player numerical values
        this.points = 0;
        this.actions = 0;
        this.buys = 0;
        this.turns = 0;
    }

    //takes the cards out of the supply, assigns an owner to them and puts them in the deck
    //shuffles 
    startDeck(){
        for(var i = 0; i < 7; i++){
            var temp = this.supply.piles[4].drawFrom()
            temp.owner = this
            this.deck.add(temp)
        }
        for(var i = 0; i < 3; i++){
            var temp2 = this.supply.piles[1].drawFrom()
            temp2.owner = this
            this.deck.add(temp2)
        }
        this.deck.shuffle();
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
            console.log(`[${i}]: ${this.hand[i].display} of ${this.hand[i].suit}`)
        }
        return this;
    }
    displayHandText(){
        var output = ''
        output += `${this.name}'s hand:\n`
        for(var i = 0; i < this.hand.length; i++){
            output += `[${i}]: ${this.hand[i].display} of ${this.hand[i].suit}\n`
        }
        return output;
    }
    discardByIndex(index){ //Unvisited. might need rework.
        if (index < this.hand.length){
            var dc = this.hand[index];
            console.log(`Discarding ${this.hand[index].display} of ${this.hand[index].suit}`);
            this.discardPile.push(dc);
            this.hand.splice(index, 1);
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
