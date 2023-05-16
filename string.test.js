const string = require("./string")


test("accepts a string and returns its length", ()=>{
        expect(string("Hi")).toBe(2);    
    }
)
test("Throw an Error", ()=>{
   
    expect(string("")).toMatch("Invalid string")
}
)
