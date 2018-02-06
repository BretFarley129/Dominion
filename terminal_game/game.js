/*--------------------------------------------------------
This is the official text based game file. We might
not get around to fully implenting this.
--------------------------------------------------------*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var Player = require('./classes/player.js');
var Deck = require('./classes/deck.js');
var Card = require('./classes/card.js');

var d1 = new Deck;
// d1.display()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
var Bret = new Player('Bret', d1);
Bret.draw(5).displayHand();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
Bret.discardByIndex(4).discardHand().displayHand();

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});
var requestInput = callback => {
    rl.question('Enter a thing: ', thing => {
        callback(thing);
    });
};
aaaa = requestInput
