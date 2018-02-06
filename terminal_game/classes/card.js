var Player = require('./player.js');
var Deck = require('./deck.js');
module.exports = class Card{
    constructor(name, types=[], cost=0, money=0, actions=0, draws=0, buys=0, points=0, duration=0, owner=null, stack = 10){
        this.cardName = name;
        this.types = types;
        this.cost = cost;
        this.money = money;
        this.actions = actions;
        this.draws = draws;
        this.buys = buys;
        this.points = points;
        this.duration = duration;
        this.owner = owner;
        this.stack = stack
        this.id_num = 0;
    }

    // display function now returns a string to make formatting easier for console output
    display(){
        return `${this.cardName}    (${this.cost})`;
    }

    // details function provides a more detailed view of the card than display()
    details(){
        console.log(`--------------------------------`);
        console.log(`${this.cardName}    (${this.cost})`);
        var output = '';
        for (var i = 0; i < this.types.length; i++){
            if (i == this.types.length - 1){
                output += `${this.types[i]}`
            }
            else{
                output += `${this.types[i]}, `
            }
        }
        console.log(output);
        if(this.points != 0)
            console.log(`+ ${this.points} points`)
        if(this.money != 0)
            console.log(`+ ${this.money} money`)
        if(this.actions != 0)
            console.log(`+ ${this.actions} actions`)
        if(this.draws != 0)
            console.log(`+ ${this.draws} draws`)
        if(this.buys != 0)
            console.log(`+ ${this.buys} buys`)
        if(this.duration != 0)
            console.log(`${this.duration} duration`)
    }
}

// constructor(suit, value){
//     this.suit = suit;
//     this.value = value;
//     if(value == 1){
//         this.display = "A";
//     }
//     else if(value == 11){
//         this.display = "J";
//     }
//     else if(value == 12){
//         this.display = "Q";
//     }
//     else if(value == 13){
//         this.display = "K";
//     }
//     else{
//         this.display = String(value);
//     }
// }
