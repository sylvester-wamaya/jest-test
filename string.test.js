const stringLen = require("./stringlength")
const stringRev = require("./stringreverse")


test("accepts a string and returns its length", ()=>{
        expect(stringLen("Hi")).toBe(2);    
    }
)
test("Throw an Error", ()=>{
   
    expect(stringLen("")).toMatch("Invalid string")
}
)
test("Reverse string", ()=>{
   
    expect(stringRev("boy")).toMatch(/^yob$/)
}
)


