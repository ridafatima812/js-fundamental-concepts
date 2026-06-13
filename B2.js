/*
========================
b2.js — Functions + Type Coercion
========================
*/

/*
Question:
Write a function typeAnalyser(value) that returns:
{
  input,
  typeofResult,
  isArray,
  isNull,
  toNumber,
  toBoolean,
  toString
}
*/

/* Function Definition */
function typeAnalyser(value) {
    return {
        input: value,
        typeofResult: typeof value,
        isArray: Array.isArray(value),
        isNull: value === null,
        toNumber: Number(value),
        toBoolean: Boolean(value),
        toString: String(value)
    };
}

/*
========================
Test Cases
========================
*/

console.log(typeAnalyser(42));
console.log(typeAnalyser('hello'));
console.log(typeAnalyser(null));
console.log(typeAnalyser([]));
console.log(typeAnalyser(undefined));
console.log(typeAnalyser(true));
console.log(typeAnalyser(0));
console.log(typeAnalyser(''));

/*
========================
Expected Results (Comments)
========================

1. typeAnalyser(42)
typeofResult = "number"
isArray = false
isNull = false
toNumber = 42
toBoolean = true
toString = "42"

2. typeAnalyser('hello')
typeofResult = "string"
isArray = false
isNull = false
toNumber = NaN
toBoolean = true
toString = "hello"

3. typeAnalyser(null)
typeofResult = "object"
isArray = false
isNull = true
toNumber = 0
toBoolean = false
toString = "null"

4. typeAnalyser([])
typeofResult = "object"
isArray = true
isNull = false
toNumber = 0
toBoolean = true
toString = ""

5. typeAnalyser(undefined)
typeofResult = "undefined"
isArray = false
isNull = false
toNumber = NaN
toBoolean = false
toString = "undefined"

6. typeAnalyser(true)
typeofResult = "boolean"
isArray = false
isNull = false
toNumber = 1
toBoolean = true
toString = "true"

7. typeAnalyser(0)
typeofResult = "number"
isArray = false
isNull = false
toNumber = 0
toBoolean = false
toString = "0"

8. typeAnalyser('')
typeofResult = "string"
isArray = false
isNull = false
toNumber = 0
toBoolean = false
toString = ""
*/