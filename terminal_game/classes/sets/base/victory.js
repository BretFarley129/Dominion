var Card = require('./../../card.js')

module.exports = class Victory extends Card{
    constructor(value){
        super();
        this.types = ['victory'];
        if (value == 1){
            this.types = ['curse'];
            this.cardName = 'Curse';
            this.points = -1;
            this.cost = 0;
            this.stack = 30;
        }
        else if (value == 2){
            this.cardName = 'Estate';
            this.points = 1;
            this.cost = 2;
            this.stack = 24;
        }
        else if (value == 3){
            this.cardName = 'Duchy';
            this.points = 3;
            this.cost = 5;
            this.stack = 12;
        }
        else if (value == 4){
            this.cardName = 'Province';
            this.points = 6;
            this.cost = 8;
            this.stack = 12;
        }
        else if (value == 5){
            this.cardName = 'Colony';
            this.points = 10;
            this.cost = 11;
            this.stack = 12;
        }
        this.actions = 0;
        this.draws = 0;
        this.buys = 0;
        this.money = 0;
        this.duration = 0;
        this.owner = null;
    }
}
