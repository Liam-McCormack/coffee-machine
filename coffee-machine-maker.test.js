const { test, expect } = require("@jest/globals")

const makeCoffeeMachine = require('./coffee-machine-maker');


describe("makeCoffeeMachine()", () => {
    test("makeCoffeeMachine() returns an object", () => {
        expect(typeof makeCoffeeMachine()).toBe('object')
    });
    test("makeCoffeeMachine() has a beans property which is equal to the first argument it is given​", () => {
        const testFunc = makeCoffeeMachine('Java Lava');
        expect(testFunc.beans).toEqual('Java Lava');
    });
    test("makeCoffeeMachine() has a a waterLevel property which instantiates as 0​", () => {
        const testFunc = makeCoffeeMachine();
        expect(testFunc.waterLevel).toEqual(0);
    })
    test("makeCoffeeMachine() has a a maxWaterLevel property that is 5 by default but can be passed as an argument​", () => {
        const testFunc = makeCoffeeMachine();
        expect(testFunc.maxWaterLevel).toBe(5);

        const testFunc2 = makeCoffeeMachine('Java Lava', 10);
        expect(testFunc2.maxWaterLevel).toBe(10);
    });

    describe("addWater()", () => {
        test("addWater() will increase waterLevel by 1 each time its called but not above the maxWaterLevel​", () => {
            const testFunc = makeCoffeeMachine();
            testFunc.addWater();
            testFunc.addWater();
            testFunc.addWater();
            testFunc.addWater();
            expect(testFunc.waterLevel).toBe(4);

            const testFunc2 = makeCoffeeMachine('Java Lava', 2);
            testFunc2.addWater();
            testFunc2.addWater();
            testFunc2.addWater();
            expect(testFunc2.maxWaterLevel).toBe(2)
            expect(testFunc2.waterLevel).toBe(2)
        })
    });

    describe("makeCoffee()", () => {
        test("makeCoffee() will return 'Please add water' if the waterLevel is 0", () => {
            const testFunc = makeCoffeeMachine();
            expect(testFunc.makeCoffee()).toBe('Please add water');
        })
        test("makeCoffee() will return 'Espresso' if invoked with the string 'Espresso'", () => {
            const testFunc = makeCoffeeMachine('Java Lava');
            testFunc.addWater();
            expect(testFunc.makeCoffee('Espresso')).toBe(`An Espresso with Java Lava`);
            expect(testFunc.waterLevel).toBe(0);
        })
        test("makeCoffee() will return 'Americano' if invoked with no string arguments", () => {
            const testFunc = makeCoffeeMachine('Java Lava');
            testFunc.addWater();
            expect(testFunc.makeCoffee()).toBe(`An Americano with Java Lava`);
            expect(testFunc.waterLevel).toBe(0);
        })
    });
})