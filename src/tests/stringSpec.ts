import {concat,capitalize,upperCase,lowerCase } from "../utilities/strings"



it("string Should be Hello Ahmed",()=>{
    expect(concat("Hello ","Ahmed")).toEqual("Hello Ahmed")
})

it("string Should not be Hello Ahmed",()=>{
    expect(concat("Hello","Ahmed")).not.toEqual("Hello Ahmed")
})

it("should be Start with Capital Letter",()=>{
    expect(capitalize("hello ahmed")).toEqual("Hello Ahmed")
})


it("should be Lower Case",()=>{
    expect(lowerCase("Hello Ahmed")).toEqual("hello ahmed")
})
it("should be Upper Case",()=>{
    expect(upperCase("hello ahmed")).toEqual("HELLO AHMED")
})
