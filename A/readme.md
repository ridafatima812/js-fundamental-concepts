# A1

Difference between var, let, and const in JavaScript
JavaScript provides three ways to declare variables: var, let, and const. They differ in scope, hoisting, TDZ, and re-declaration/re-assignment behavior.

1. Scope
var
Function-scoped
Not block-scoped
If declared inside { }, it is still accessible outside the block (if inside same function)
let
Block-scoped ({ })
Only accessible inside the block where it is defined
const
Block-scoped ({ })
Same scope rules as let
2. Hoisting
var
Fully hoisted to the top of its scope
Initialized with undefined
console.log(x); // undefined
var x = 10;
let
Hoisted but NOT initialized
Cannot be accessed before declaration
console.log(x); // ReferenceError
let x = 10;
const
Hoisted but NOT initialized
Must be initialized at the time of declaration
const x = 10;
3. Temporal Dead Zone (TDZ)
What is TDZ?

The Temporal Dead Zone is the time between entering scope and variable declaration where the variable cannot be accessed.

var
❌ No TDZ
Accessible before declaration (value = undefined)
let
✅ Has TDZ
Cannot be accessed before declaration
const
✅ Has TDZ
Strong TDZ because it must be initialized immediately
4. Re-declaration and Re-assignment
Feature	var	let	const
Re-declaration	Allowed	Not allowed	Not allowed
Re-assignment	Allowed	Allowed	Not allowed
Examples
var
var a = 10;
var a = 20; // allowed
a = 30;     // allowed
let
let a = 10;
a = 20;     // allowed
let a = 30; // error
const
const a = 10;
a = 20; // error
5. Which one should you use in modern JavaScript?
Best Practice:
Use const by default
Safer
Prevents accidental reassignment
Makes code more predictable
Use let when value needs to change
Loops
Counters
Dynamic variables
Avoid var
Function scope causes bugs
Hoisting issues
Outdated approach
Final Summary
var → function-scoped, hoisted with undefined, no TDZ, avoid using
let → block-scoped, TDZ applies, can reassign but not redeclare
const → block-scoped, TDZ applies, cannot reassign or redeclare
Conclusion

Modern JavaScript recommends:
 const as default
 let when reassignment is needed
 var should generally be avoided


---

## A2
# V8 Engine and JavaScript Single-Threaded Model

JavaScript execution is powered by the **V8 engine** and follows a **single-threaded, event-driven model**.

---

## 1. What is the V8 Engine?

The **V8 engine** is a high-performance JavaScript engine developed by Google.

### Where it is used:
- Google Chrome browser
- Node.js runtime environment

### What it does:
- Converts JavaScript code into **machine code** (not interpreted line-by-line)
- Executes JavaScript very fast

---

## 2. What is JIT (Just-In-Time) Compilation?

**JIT compilation** means:

> JavaScript is compiled into machine code at runtime (just before execution), not in advance.

### Simple explanation:
- Instead of reading code line-by-line like a script
- V8 quickly converts it into **fast machine code**
- Then CPU executes it directly

👉 This makes JavaScript **much faster than traditional interpreted languages**

---

## 3. What does “Single-Threaded” mean?

JavaScript is **single-threaded**, meaning:

- It has **one Call Stack**
- It can execute **only one task at a time**

### Call Stack concept:
- Executes functions in order (LIFO: Last In, First Out)
- Only one function runs at a time

### Example:
```js
function a() {
  console.log("A");
}
function b() {
  console.log("B");
}

a();
b();

👉 Output:

A
B

Only one function executes at a time.

4. If JS is single-threaded, how does it handle async tasks?

JavaScript uses the Event Loop system to handle asynchronous operations like:

setTimeout
fetch
DOM events

Even though JS is single-threaded, it delegates async work to the browser or Node.js.

5. Core Components of Async Model
🔹 Call Stack
Executes JS code line by line
Only one function runs at a time
🔹 Web APIs (Browser / Node.js APIs)
Handle async tasks outside the main thread
Examples:
setTimeout
fetch API
DOM events
🔹 Callback Queue (Task Queue)
Stores completed async callbacks
Waits for Call Stack to become empty
🔹 Event Loop

Constantly checks:

Is Call Stack empty?

If yes:

Moves tasks from Callback Queue → Call Stack
6. Example Flow (setTimeout)
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 2000);

console.log("End");
Execution Steps:
"Start" → Call Stack
setTimeout → sent to Web API
"End" → Call Stack
After 2 seconds → callback goes to Callback Queue
Event Loop pushes it to Call Stack
"Inside timeout" prints
Output:
Start
End
Inside timeout
Final Summary
V8 Engine → Executes JavaScript (used in Chrome & Node.js)
JIT Compilation → Converts JS to machine code at runtime
Single-threaded JS → One Call Stack, one task at a time
Async handling → Web APIs + Callback Queue + Event Loop
Key Idea

Even though JavaScript is single-threaded, it can still handle async operations efficiently using the event loop architecture.


---

## A3
# JavaScript Data Types & Type Coercion

JavaScript has **8 data types** and a behavior called **type coercion**, where values are converted from one type to another.

---

## 1. The 8 JavaScript Data Types

JavaScript is divided into:

### 🔹 7 Primitive Types
1. **String** → text values  

   js
   let name = "Ali";

Number → integers and decimals

let age = 20;

Boolean → true/false

let isActive = true;

Undefined → variable declared but not assigned

let x;

Null → intentional empty value

let data = null;

Symbol → unique identifiers

let id = Symbol("id");

BigInt → large integers beyond Number limit

let big = 12345678901234567890n;
🔹 1 Non-Primitive Type
Object → collection of key-value pairs
let user = {
  name: "Ali",
  age: 20
};
2. The typeof null Bug
typeof null === "object" // true
Why this happens:
This is a historical bug in JavaScript
In the early implementation, values were stored with type tags
null was incorrectly assigned the object type tag
It was never fixed due to backward compatibility

👉 Important:
Even though it returns "object", null is NOT an object

3. Type Coercion

Type coercion means JavaScript automatically converts one type into another.

🔹 Implicit Coercion (Automatic Conversion)

JavaScript converts types automatically behind the scenes.

Example 1:
"5" + 2
// "52" (number converted to string)
Example 2:
"5" - 2
// 3 (string converted to number)
🔹 Explicit Coercion (Manual Conversion)

We manually convert types using functions.

Number()
Number("10") // 10
String()
String(10) // "10"
Boolean()
Boolean(1) // true
4. Difference Between == and ===
🔹 == (Loose Equality)
Performs type coercion
Converts values before comparison
Can give unexpected results
"5" == 5 // true

👉 Dangerous because JS silently converts types

🔹 === (Strict Equality)
No type conversion
Checks both value and type
"5" === 5 // false

👉 Safe and recommended

Final Summary
JavaScript has 8 data types (7 primitive + 1 object)
typeof null === "object" is a historical bug
Implicit coercion → automatic conversion by JS
Explicit coercion → manual conversion using Number(), String(), Boolean()
== is unsafe due to coercion
=== is safe because it is strict
Best Practice

👉 Always use === instead of ==
👉 Prefer explicit type conversion to avoid bugs


---

## A4
# Primitive vs Non-Primitive (Reference) Data Types in JavaScript

JavaScript data types are divided into **Primitive types** and **Non-Primitive (Reference) types**. The main difference is how they are stored and copied in memory.

---

## 1. Primitive Data Types

### 🔹 Primitive Types
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

---

### 🔹 Where are primitives stored?
- Stored in the **Stack memory**
- Stack stores **simple, fixed values**
- Each variable holds its **own independent value**

---

## 2. Non-Primitive (Reference) Data Types

### 🔹 Non-Primitive Types
- Object
- Array
- Function

---

### 🔹 Where are non-primitives stored?
- Stored in the **Heap memory**
- Heap stores **complex data structures**
- Variable does NOT store actual value
- It stores a **reference (address) to the memory location**

---

## 3. Copying Primitive Values

When you copy a primitive value:
- A **new independent copy** is created
- Changes do NOT affect the original variable

### Example:
js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

👉 Both variables are completely independent.

4. Copying Reference Values (Objects/Arrays)

When you copy an object or array:

Only the reference (memory address) is copied
Both variables point to the same object in heap memory
Example:
let obj1 = {
  name: "Ali"
};

let obj2 = obj1;

obj2.name = "Ahmed";

console.log(obj1.name); // Ahmed
console.log(obj2.name); // Ahmed
5. Why does this happen?
obj1 and obj2 both point to the same memory location
So changing one affects the other
6. Visual Understanding
Primitive:
a = 10
b = 10 (separate copy)
Reference:
obj1 ---> { name: "Ali" }
obj2 ----^ (same reference)
7. Summary
Primitive types → stored in Stack, copied by value
Non-primitive types → stored in Heap, copied by reference
Primitive copy → independent values
Object copy → shared reference (mutations affect both)

---

## A5
# Pass by Value vs Pass by Reference in JavaScript

JavaScript function arguments behave in a specific way that is often misunderstood. It is important to know whether JavaScript is truly “pass by reference” or not.

---

## 1. Pass by Value (Primitive Types)

When a **primitive value** is passed to a function, JavaScript uses **pass by value**.

👉 This means:
- A copy of the value is passed
- The original variable is NOT affected

### Example:
js id="p1"
function changeValue(x) {
  x = 50;
}

let a = 10;
changeValue(a);

console.log(a); // 10 (unchanged)

✔ Explanation:

a is copied into x
Changing x does not affect a
2. Objects and Arrays (Reference Types)

When an object or array is passed to a function:

A reference to the memory location is passed
Example:
function updateObj(obj) {
  obj.name = "Ahmed";
}

let user = { name: "Ali" };

updateObj(user);

console.log(user.name); // Ahmed

✔ Explanation:

Both obj and user point to the same memory
Changing property affects original object
3. Important Nuance: “Pass by Reference” vs “Reference by Value”

JavaScript is NOT truly pass by reference.

👉 It is:

Pass by value of the reference

What does this mean?
The reference (memory address) is copied
But NOT the actual object itself
So both variables point to same object
4. Proof 1: Reassigning Object Inside Function DOES NOT Affect Original

If JavaScript were truly pass by reference, reassigning would change the original — but it does NOT.

Example:
function changeObject(obj) {
  obj = { name: "Zara" }; // new object created
}

let user = { name: "Ali" };

changeObject(user);

console.log(user.name); // Ali (unchanged)

✔ Explanation:

obj now points to a new object
user still points to old object
Original is NOT changed
5. Proof 2: Mutating Object DOES Affect Original
Example:
function modify(obj) {
  obj.age = 30;
}

let user = { name: "Ali", age: 20 };

modify(user);

console.log(user.age); // 30 (changed)

✔ Explanation:

Both variables share same reference
Mutation affects original object
6. Final Conclusion
🔹 Primitives:
Passed by value
Copy is created
Original is safe
🔹 Objects/Arrays:
Reference is passed (but by value)
Same memory location is shared
Key Answer (Important Exam Line)

👉 JavaScript is:

❌ NOT pass by reference
✅ It is pass by value of reference

Summary
Primitive → pass by value
Object → pass reference value
Reassign inside function → does NOT affect original
Mutate properties → DOES affect original

---

## A6
# Functions in JavaScript

A **function** in JavaScript is a reusable block of code designed to perform a specific task. Instead of writing the same code again and again, we wrap it inside a function and call it whenever needed.

---

## 1. Why do we use functions?

Functions solve the problem of **code repetition** and improve:
- Reusability
- Readability
- Maintainability

---

## 2. Function Declaration Syntax

A function declaration is written using the `function` keyword.

js
function functionName(parameter1, parameter2) {
  // code to execute
  return result;
}
Example:
function add(a, b) {
  return a + b;
}
3. Hoisting of Function Declarations
Are function declarations hoisted?

✔ Yes, function declarations are fully hoisted.

Can we call before definition?

✔ Yes, you can call the function before it is written in the code.

Example:
console.log(sum(5, 3));

function sum(a, b) {
  return a + b;
}

✔ This works because the function is moved to the top during memory creation phase.

4. Parameters vs Arguments
🔹 Parameters
Variables defined in function definition
function greet(name) {  // name is parameter
  console.log(name);
}
🔹 Arguments
Actual values passed when calling function
greet("Ali"); // "Ali" is argument
5. Return Value
What if no return is written?
The function returns undefined by default
Example:
function test() {
  let x = 10;
}

console.log(test()); // undefined
6. Real-World Example: Age Validation Function
function validateAge(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

console.log(validateAge(20)); // Eligible to vote
console.log(validateAge(15)); // Not eligible to vote
Summary
A function is a reusable block of code
Function declarations are hoisted
You can call them before defining them
Parameters = definition variables
Arguments = passed values
Default return value is undefined

---