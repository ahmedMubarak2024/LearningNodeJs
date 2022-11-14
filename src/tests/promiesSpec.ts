import {step1,step2,step3} from "../promies"

var jasmineEs6PromiseMatchers = require("jasmine-es6-promise-matchers")


it("should return 1",async ()=>{
  expect( await step1()).toEqual(1)
})


it("should return 2", ()=>{
     step1().then((value)=>{
         expect(value).toEqual(2)
     })
  })

  
it("should return 3",async ()=>{
    expect(await step3(2)).toEqual(3)
 })