/*
========================
b5.js — Pure Functions Library
========================
*/

/* ==================================================
1. addToCart(cart, item)
================================================== */

function addToCart(cart, item) {
    return [...cart, item];
}

/* ==================================================
2. updateUserAge(user, newAge)
================================================== */

function updateUserAge(user, newAge) {
    return {
        ...user,
        age: newAge
    };
}

/* ==================================================
3. incrementScore(scores, playerName)
================================================== */

function incrementScore(scores, playerName) {
    return {
        ...scores,
        [playerName]: (scores[playerName] || 0) + 1
    };
}

/* ==================================================
4. reverseString(str)
================================================== */

function reverseString(str) {
    return str.split('').reverse().join('');
}

/* ==================================================
5. removeItem(arr, index)
================================================== */

function removeItem(arr, index) {
    return arr.filter((_, i) => i !== index);
}

/* ==================================================
TEST CASES (NOW ACTIVE)
================================================== */

// 1
const cart = ['Apple', 'Banana'];
const newCart = addToCart(cart, 'Mango');

console.log(cart);
console.log(newCart);

// 2
const user = { name: "Ali", age: 20 };
const updatedUser = updateUserAge(user, 25);

console.log(user);
console.log(updatedUser);

// 3
const scores = { Ali: 5, Sara: 10 };
const newScores = incrementScore(scores, "Ali");

console.log(scores);
console.log(newScores);

// 4
const text = "hello";

console.log(text);
console.log(reverseString(text));

// 5
const fruits = ["Apple", "Banana", "Mango"];
const newFruits = removeItem(fruits, 1);

console.log(fruits);
console.log(newFruits);

/* ==================================================
FINAL SUMMARY
==================================================

✔ Pure functions (no mutation)
✔ New values returned every time
✔ Original data unchanged
*/