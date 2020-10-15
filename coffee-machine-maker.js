

function addWater() {
    if (this.waterLevel < this.maxWaterLevel) this.waterLevel++
}

function makeCoffee(coffeeType) {
    if (this.waterLevel === 0) return 'Please add water';

    this.waterLevel--;
    if (coffeeType === 'Espresso') {
        return `An ${coffeeType} with ${this.beans}`;
    } else {
        return `An Americano with ${this.beans}`;
    }
}


function makeCoffeeMachine(beans, maxWaterLevel) {

    const coffeeMachine = {};

    //Properties
    coffeeMachine.beans = beans;
    coffeeMachine.waterLevel = 0;
    coffeeMachine.maxWaterLevel = maxWaterLevel || 5;


    //Methods
    coffeeMachine.addWater = addWater;
    coffeeMachine.makeCoffee = makeCoffee;


    return coffeeMachine;
}


module.exports = makeCoffeeMachine;