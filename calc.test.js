const Calc = require("./calc");

describe("My calculator", ()=>{

    const input = new Calc(8, 4)
    test('sum ', () => {
        expect(input.sum()).toBe(12)
    })
    test('subtract', () => {
        expect(input.sub()).toBe(4)
    })
    test('divide', () => {
        expect(input.divide()).toBe(2)
    })
    test('multiply', () => {
        expect(input.multiply()).toBe(32)
    })

})

