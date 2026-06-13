/*
========================
b1.js — var / let / const + Hoisting (Final Exam Answer)
========================
*/

/* =========================
PART 1: Predict & Explain
========================= */

/*
console.log(a); // undefined
Reason: var is hoisted and initialized with undefined

console.log(b); // ReferenceError
Reason: let is hoisted but in Temporal Dead Zone (TDZ)

console.log(c); // ReferenceError
Reason: const is hoisted but also in TDZ
*/

var a = 10;
let b = 20;
const c = 30;

/* =========================
PART 2: Re-declaration Rules
========================= */

/*
var a = 99;  // Allowed (var allows re-declaration)

let b = 88;  // Error (let cannot be re-declared)

const c = 77; // Error (const cannot be re-declared or reassigned)
*/

/* =========================
PART 3: Object Behavior
========================= */

const user = { name: "Asad" };

/*
Allowed:
Object properties can be changed
*/
user.name = "Ali";

/*
NOT allowed:
user = {}; // TypeError (const reassignment not allowed)
*/

/* =========================
FIXED WORKING CODE (RUNNABLE)
========================= */

// Part 1 execution
console.log(a); // undefined
var a = 10;

console.log(b); // 20
console.log(c); // 30

// Part 2 (safe variables - no conflicts)
var a2 = 99;
let b2 = 88;
const c2 = 77;

console.log(a2); // 99
console.log(b2); // 88
console.log(c2); // 77

// Part 3 object mutation
const user2 = { name: "Asad" };
user2.name = "Ali";

console.log(user2); // { name: "Ali" }