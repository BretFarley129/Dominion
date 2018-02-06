var Card = require('./../../card.js')

module.exports = class Money extends Card{
    constructor(value){
        super();
        if (value == 1){
            this.cardName = 'Copper';
            this.money = 1;
            this.cost = 0;
            this.stack = 60;
        }
        else if (value == 2){
            this.cardName = 'Silver';
            this.money = 2;
            this.cost = 3;
            this.stack = 40;
        }
        else if (value == 3){
            this.cardName = 'Gold';
            this.money = 3;
            this.cost = 6;
            this.stack = 30;
        }
        else if (value == 4){
            this.cardName = 'Platinum';
            this.money = 4;
            this.cost = 9;
            this.stack = 12;
        }
        this.types = ['treasure'];
        this.actions = 0;
        this.draws = 0;
        this.buys = 0;
        this.points = 0;
        this.duration = 0;
        this.owner = null;
    }
}
