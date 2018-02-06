var Player = require('./player.js');
var Card = require('./card.js');
var Deck = require('./deck.js')
var Money = require('./sets/base/money.js');
var Victory = require('./sets/base/victory.js');
var Dominion_1st = require('./sets/dominion/1st_edition.js')

module.exports = class Kingdom{
    constructor(){
        this.piles = []

        // Push victory cards
        for (var i = 1; i < 5; i++){
            var pile = new Deck();
            pile.setPile(new Victory(i));
            this.piles.push(pile);
        }
<<<<<<< HEAD
        for (var i = 1; i < 4; i++){
=======

        // Push treasure cards
        for (var i = 1; i < 4; i++) {
>>>>>>> 7ff11b47606cc1e3a9ba60d94e355e873e67ee5f
            var pile = new Deck();
            pile.setPile(new Money(i));
            this.piles.push(pile);
        }
<<<<<<< HEAD
        for (var i = 1; i < 11; i++){
            var pile = new Deck();
            pile.setPile(new Money(i));
            this.piles.push(pile);
=======

        // Randomly select 10 kingdom cards, check and prevent duplicates as we go, then push
        var kingdomCount = 0
        while (kingdomCount < 10) {
            var duplicate = false;
            var pile = new Deck();
            var kingdomId = Math.ceil(Math.random() * 25)
            // Log kingdomId to show duplicates are indeed being replaced
            // console.log(kingdomId)
            for (var i = 0; i < this.piles.length; i++) {
                if (this.piles[i].content[0].id_num == kingdomId) {
                    duplicate = true;
                    break;
                }
            }
            if (duplicate == false) {
                pile.setPile(new Dominion_1st(kingdomId));
                this.piles.push(pile);
                kingdomCount++;
            }
        }

        // Sort kingdom cards by cost...I'm too lazy to write an optimal sort. Bret help LOL
        for (var i = 6; i < this.piles.length; i++) {
            for (var j = 7; j < this.piles.length; j++) {
                if (this.piles[i].content[0].cost < this.piles[j].content[0].cost) {
                    var temp = this.piles[i]
                    this.piles[i] = this.piles[j]
                    this.piles[j] = temp
                }
            }
>>>>>>> 7ff11b47606cc1e3a9ba60d94e355e873e67ee5f
        }
    }

    // Lots of formatting in display function for organized view of the Supply
    // Deck showPile function and Card display function refactored to return a string
    display(){
        console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n*------------ Supply ------------*\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')
        for ( var i = 0; i < this.piles.length; i++){
            if (i == 0) {
                console.log('\n*---------- Victory -----------*\n');
            } else if (i == 4) {
                console.log('*---------- Treasure ----------*\n');
            } else if (i == 7) {
                console.log('*---------- Kingdom -----------*\n');
            }

            // Logs a number by each card. Possible future use for user input/card selection?
            console.log(`${i + 1}. ` + this.piles[i].showPile())
            ;
            if (i != 3 && i != 6 && i != 16) {
                console.log(`----------------------------`);
            } else {
                console.log('\n')
            }
        }
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    }
}
