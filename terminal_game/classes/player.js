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
        this.next = null;

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

    //function to set turn order
    setNext(player){
        this.next = player
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
            //probably want to rework this
            else{
                while(this.discardPile[0]){
                    this.deck.content.push(this.discardPile.pop());
                    this.deck.shuffle();
                    this.hand.push(this.deck.drawFrom());
                }
                // this.deck = this.discardPile;
                // this.discardPile = [];
                // this.hand.push(this.deck.drawFrom());
            }
        }
        return this;
    }
    displayHand(){
        console.log(`${this.name}'s hand:`)
        for(var i = 0; i < this.hand.length; i++){
            console.log(`[${i}]: ${this.hand[i].display()}`);
        }
        return this;
    }
    displayDeck(){
        console.log(`${this.name}'s deck:`)
        for(var i = 0; i < this.deck.content.length; i++){
            console.log(`[${i}]: ${this.deck.content[i].display()}`);
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
    discardInPlay(){ // this will need reworking once duration cards are implemented
        while (this.in_play[0]){
            this.discardPile.push(this.hand.pop());
        }
        console.log('Cards in play Discarded');
        return this;
    }
    cleanup(){
        this.discardHand();
        this.discardInPlay();
        this.draw(5);
        this.actions = 1;
        this.buys = 1;
        return this;
    }

}
