var Card = require('./../../card.js')

module.exports = class Dom_1st extends Card{
    constructor(value){
        super();
        this.points = 0;
        this.stack = 10;
        this.actions = 0;
        this.buys = 0;
        this.money = 0;
        this.points = 0;
        this.duration = 0;
        this.owner = null;
        this.draws = 0;
        this.set = "Dominion"
        if (value == 1){
            this.id_num = 1
            this.cardName = 'Cellar';
            this.cost = 2;
            this.types = ['action'];
            this.actions = 1;
            this.draws = 0;
            this.play = function(){
                console.log('Playing Cellar');
                console.log('Discard any number of cards, then draw that many');
            }
        }
        else if (value == 2){
            this.id_num = 2
            this.cardName = 'Chapel';
            this.cost = 2;
            this.types = ['action'];
            this.play = function(){
                console.log('Playing Chapel');
                console.log('Trash up to 4 cards from your hand');
            }
        }
        else if (value == 3){
            this.id_num = 3
            this.cardName = 'Moat';
            this.types = ['action', 'reaction'];
            this.cost = 2;
            this.draws = 2;
            this.play = function(){
                console.log('Playing Moat');
                console.log('Trash up to 4 cards from your hand');
                console.log('Reveal this from your hand to ignore any attack cards');
            }
            this.react = function(){
                console.log('You have a Moat!');
                console.log('Reveal this from your hand to ignore any attack cards');
            }
        }
        else if (value == 4){
            this.id_num = 4
            this.cardName = 'Chancellor';
            this.types = ['action'];
            this.cost = 3;
            this.money = 2;
            this.play = function(){
                console.log('Playing Chancellor');
                console.log('You may immediately put your deck into your discard pile');
            }
        }
        else if (value == 5){
            this.id_num = 5
            this.cardName = 'Village';
            this.types = ['action'];
            this.cost = 3;
            this.draws = 1;
            this.actions = 2;
            this.play = function(){
                console.log('Playing Village');
            }
        }
        else if (value == 6){
            this.id_num = 6
            this.cardName = 'Woodcutter';
            this.types = ['action'];
            this.cost = 3;
            this.buys = 1;
            this.money = 2;
            this.play = function(){
                console.log('Playing Woodcutter');
            }
        }
        else if (value == 7){
            this.id_num = 7
            this.cardName = 'Workshop';
            this.types = ['action'];
            this.cost = 3;
            this.play = function(){
                console.log('Playing Workshop');
                console.log('Gain a card costing up to (4)');
            }
        }
        else if (value == 8){
            this.id_num = 8
            this.cardName = 'Bureaucrat';
            this.types = ['action', 'attack'];
            this.cost = 4;
            this.play = function(){
                console.log('Playing Bureaucrat');
                console.log('Gain a silver. Each other player reveals a Victory card from their hand and puts it back on top of their deck (or reveals a hand with no Victory cards)');
            }
        }
        else if (value == 9){
            this.id_num = 9
            this.cardName = 'Feast';
            this.types = ['action'];
            this.cost = 4;
            this.play = function(){
                console.log('Playing Chancellor');
                console.log('Trash this card. Gain a card costing up to (5)');
            }
        }
        else if (value == 10){
            this.id_num = 10
            this.cardName = 'Gardens';
            this.types = ['victory'];
            this.cost = 4;
            this.stack = 12;
            this.points = 0;
            this.play = function(){
                console.log('Playing Gardens');
                console.log('Worth 1vp for every 10 cards you have in your deck (rounded down)');
            }
        }
        else if (value == 11){
            this.id_num = 11
            this.cardName = 'Militia';
            this.types = ['action', 'attack'];
            this.cost = 4;
            this.money = 2;
            this.play = function(){
                console.log('Playing Militia');
                console.log('Each other player discards down to 3 cards in hand');
            }
        }
        else if (value == 12){
            this.id_num = 12
            this.cardName = 'Moneylender';
            this.types = ['action'];
            this.cost = 4;
            this.play = function(){
                console.log('Playing Moneylender');
                console.log('You may trash a copper from your hand for + (3)');
            }
        }
        else if (value == 13){
            this.id_num = 13
            this.cardName = 'Remodel';
            this.types = ['action'];
            this.cost = 4;
            this.play = function(){
                console.log('Playing Remodel');
                console.log('Trash a card from your hand. Gain a card costing up to (2) more than it');
            }
        }
        else if (value == 14){
            this.id_num = 14
            this.cardName = 'Smithy';
            this.types = ['action'];
            this.cost = 4;
            this.draws = 3;
            this.play = function(){
                console.log('Playing Smithy');
            }
        }
        else if (value == 15){
            this.id_num = 15
            this.cardName = 'Spy';
            this.types = ['action','attack'];
            this.cost = 4;
            this.draws = 1;
            this.stack = 10;
            this.actions = 1;
            this.play = function(){
                console.log('Playing Spy');
                console.log('Each player (including you) reveals the top card of their deck and either discards it or puts it back on their deck, your choice');
            }
        }
        else if (value == 16){
            this.id_num = 16
            this.cardName = 'Theif';
            this.types = ['action','attack'];
            this.cost = 4;
            this.play = function(){
                console.log('Playing Theif');
                console.log('This discription is too long and this is argueably the worst card in the game');
            }
        }
        else if (value == 17){
            this.id_num = 17
            this.cardName = 'Throne Room';
            this.types = ['action'];
            this.cost = 4;
            this.play = function(){
                console.log('Playing Throne Room');
                console.log('You may play a card from your hand twice');
            }
        }
        else if (value == 18){
            this.id_num = 18
            this.cardName = 'Council Room';
            this.types = ['action'];
            this.cost = 5;
            this.draws = 4;
            this.buys = 1;
            this.play = function(){
                console.log('Playing Council Room');
                console.log('Each other player draws a card');
            }
        }
        else if (value == 19){
            this.id_num = 19
            this.cardName = 'Festival';
            this.types = ['action'];
            this.cost = 5;
            this.actions = 2;
            this.buys = 1;
            this.money = 2;
            this.play = function(){
                console.log('Playing Festival');
            }
        }
        else if (value == 20){
            this.id_num = 20
            this.cardName = 'Laboratory';
            this.types = ['action'];
            this.cost = 5;
            this.draws = 2;
            this.actions = 1;
            this.play = function(){
                console.log('Playing Laboratory');
            }
        }
        else if (value == 21){
            this.id_num = 21
            this.cardName = 'Library';
            this.types = ['action'];
            this.cost = 5;
            this.play = function(){
                console.log('Playing Library');
                console.log('Draw until you have 7 cards in hand. You may discard any actions');
            }
        }
        else if (value == 22){
            this.id_num = 4
            this.cardName = 'Market';
            this.types = ['action'];
            this.cost = 5;
            this.draws = 1;
            this.actions = 1;
            this.buys = 1;
            this.money = 1;
            this.play = function(){
                console.log('Playing Market');
            }
        }
        else if (value == 23){
            this.id_num = 23
            this.cardName = 'Mine';
            this.types = ['action'];
            this.play = function(){
                console.log('Playing Mine');
                console.log('You may trash a treasure card from your hand. Gain a treasure card to your hand costing up to (3) more than it');
            }
        }
        else if (value == 24){
            this.id_num = 24
            this.cardName = 'Witch';
            this.types = ['action', 'attack'];
            this.draws = 2;
            this.stack = 10;
            this.play = function(){
                console.log('Playing Witch');
                console.log('Each other player gains a curse');
            }
        }
        else if (value == 25){
            this.id_num = 25
            this.cardName = 'Adventurer';
            this.types = ['action'];
            this.play = function(){
                console.log('Playing Adventurer');
                console.log('Reveal cards from your deck until you reveal 2 treasure cards. Put them in your hand and discard the rest');
            }
        }
    }
}
