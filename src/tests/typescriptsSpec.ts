import {sum} from "../typescript"


it("output should be 3",()=> {
   expect(sum(1,3.45)).toBeCloseTo(4,0)
}
 )

 //.toEqual(expected value)checks if the tested object is the same object

 //.toBe(expected reference)checks if the tested object is the same reference

/**
 * 
 * Test Types
Truthiness
.toBeTruthy()passes when
The expectation has any non-zero value
The expectation evaluates to true
.toBeFalsy()passes when the value is:
0
'' (an empty string)
undefined
null
NaN
If you just need the Boolean value of false, use .toEqual()
Numerical Matchers
.toBeCloseTo(expected value, precision)
Passes if a value is within a specified precision of the expected value
Precision is optional and is represented the number of decimal points to check (defaults to 2)
.toBeGreaterThan(expected value)
.toBeLessThan(expected value)
.toBeGreaterThanOrEqual(expected value)
.toBeLessThanOrEqual(expected value)
Negating Other Matchers
In JavaScript, use the ! to negate
In TypeScript, use not
In Jasmine, use .not
Exceptions
.toThrow(expected value)
.toThrowError(expected value, expected message) (expected value and expected message are optional)
Other Matchers
.toContain(expected value)
.toMatch(expected value)
.toBeDefined()
.toBeUndefined()
.toBeNull()
.toBeNan()
Custom matchers
New Terms
Term	Definition
Comparison Test	A type of test that compares strings, numbers, objects, or arrays
Numerical Matchers Test	A test of numerical values within a specified range of the expected value
Spec	An individual test
Suite	A group of related tests
Truthiness	When a conditional proves to be truth-like such as the boolean true or a condition being true, or a value not equal to 0, NaN, undefined, null, or empty.
Further Reading
Check out Jasmine's full https://jasmine.github.io/api/3.6/matchers.html for working with matches.
 * 
 */
