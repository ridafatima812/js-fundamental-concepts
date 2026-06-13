/*
========================
b3.js — Discount Calculator
========================
*/

/*
Question:
Write a function calculateDiscount(price, userType, isMember)
that returns the final price after applying all discount rules.
*/

/*
Rules Applied:

1. If price is not a number OR <= 0
   → Return 'Invalid price'

2. Admin users get 50% off

3. If price > 1000
   → 20% off

4. If price > 500
   → 10% off

5. Members get an additional 5% off
   after previous discounts

6. Final price cannot go below 1

7. Return final price rounded to 2 decimal places
*/

function calculateDiscount(price, userType, isMember) {

    // Rule 1: Validate price
    if (typeof price !== "number" || price <= 0) {
        return "Invalid price";
    }

    // Rule 2: Admin discount
    if (userType === "admin") {
        price = price * 0.50;
    }

    // Rule 3: Price greater than 1000
    else if (price > 1000) {
        price = price * 0.80;
    }

    // Rule 4: Price greater than 500
    else if (price > 500) {
        price = price * 0.90;
    }

    // Rule 5: Additional member discount
    if (isMember === true) {
        price = price * 0.95;
    }

    // Rule 6: Minimum price is 1
    if (price < 1) {
        price = 1;
    }

    // Rule 7: Round to 2 decimal places
    return Number(price.toFixed(2));
}

/*
========================
Required Test Cases
========================
*/

console.log(calculateDiscount(1200, 'user', false));
// Expected Output: 960

console.log(calculateDiscount(1200, 'user', true));
// Expected Output: 912

console.log(calculateDiscount(600, 'admin', true));
// According to the written rules:
// 600 → 50% off = 300
// 300 → 5% member discount = 285
// Expected Output: 285

console.log(calculateDiscount(-50, 'user', false));
// Expected Output: Invalid price

console.log(calculateDiscount('abc', 'user', false));
// Expected Output: Invalid price