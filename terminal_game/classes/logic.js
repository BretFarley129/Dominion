var Player = require('./player.js');
var Card = require('./card.js');
var Deck = require('./deck.js')
var Kingdom = require('./kingdom.js')
var Money = require('./sets/base/money.js');
var Victory = require('./sets/base/victory.js');
var Dominion_1st = require('./sets/dominion/1st_edition.js')

module.exports = class Game{
    constructor(){
        this.supply = new Kingdom();
        this.supply.display();
        this.currentPlayer = null;
        this.players = [];
    }

    setOrder(players){
        this.players = players;
        this.currentPlayer = players[0]
        for ( var i = 0; i < players.length; i++){
            if ( players[i] == players.length - 1 ){
                players[i].next = players[0]
            }
            else{
                players[i].next = players[i + 1]
            }
        }
    }
    turn(){
        console.log(`${this.currentPlayer.name}'s turn!`)
        this.actionPhase();
        this.buyPhase();
        this.nextTurn();
    }
    actionPhase(){
        console.log('Action Phase:')
        var cont = true;
        while(cont){
            cont = false;
            for (var i = 0; i < this.currentPlayer.hand.length; i++){
                if (this.currentPlayer.hand[i].types.includes('action')){
                    cont = true
                }
            }
            if (this.currentPlayer.actions > 0){
                cont = true;
            }
        }
        console.log(`Action phase ended`)
    }
    buyPhase(){
        console.log('Buy Phase:')
        var cont = true;
        while(cont){
            cont = false;
            for (var i = 0; i < this.currentPlayer.hand.length; i++){
                if (this.currentPlayer.hand[i].types.includes('buy')){
                    cont = true
                }
            }
            if (this.currentPlayer.buys > 0){
                cont = true;
            }
        }
        console.log(`Buy phase ended`)
    }
    nextTurn(){
        this.currentPlayer.cleanup();
        this.currentPlayer = this.currentPlayer.next;
    }
}
