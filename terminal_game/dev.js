/*--------------------------------------------------------
A development file for the text based game. In case the
overall game logic needs a different approach.
--------------------------------------------------------*/

var Player = require('./classes/player.js');
var Deck = require('./classes/deck.js');
var Card = require('./classes/card.js');

const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Let's start a game");
var d1 = new Deck;
var Bret = new Player('Bret', d1);
Bret.draw(10)
/*  this function currently has an issue where it works properly
    the first time and then proceeds to repeat the answer as many
    times as an input has been put in.

    -probably because it is a recursive call
    -not sure why it would work this way, but it does. I'll try again
    when I'm not so tired.
    - this doesn't work in a for loop; needs to call another function for closure
 */
function playCard(){
    terminal.setPrompt(Bret.displayHandText() + 'Chose a card to play:');
    terminal.prompt();
    terminal.on('line', function(answer){
        var index = parseInt(answer);
        if (index >= Bret.hand.length || index < 0){
            console.log('please pick an actual card');
        }
        else{
            Bret.discardByIndex(index);
        }
        if(Bret.hand.length > 0){
            terminal.setPrompt(Bret.displayHandText() + 'Chose a card to play:');
            terminal.prompt();
        }
        else{
            console.log('no more cards!')
            console.log('bye')
            process.exit(0);
        }
    });
    
}

playCard();
console.log('this is here')


terminal.on('close', function(){
    console.log('bye')
    process.exit(1);
});