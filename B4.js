/*
========================
b4.js — Pass by Reference & Shallow Copy Bugs
========================
*/

/* ==================================================
BUG 1: Cart Duplication Bug
================================================== */

/*
Original Code
*/

const cart1 = {
    items: ['JS Book', 'React Book'],
    total: 150
};

const cart2 = { ...cart1 };

cart2.items.push('Node Book');

console.log(cart1.items);

/*
Bug:
Spread operator creates a shallow copy.
The items array is still shared between cart1 and cart2.

Current Wrong Output:
['JS Book', 'React Book', 'Node Book']

Why?
cart1.items and cart2.items point to the same array in memory.
Changing one affects the other.
*/

/*
Fixed Version
*/

const fixedCart1 = {
    items: ['JS Book', 'React Book'],
    total: 150
};

const fixedCart2 = {
    ...fixedCart1,
    items: [...fixedCart1.items]
};

fixedCart2.items.push('Node Book');

console.log(fixedCart1.items);
// Output:
// ['JS Book', 'React Book']

console.log(fixedCart2.items);
// Output:
// ['JS Book', 'React Book', 'Node Book']


/* ==================================================
BUG 2: Function Mutating Original Object
================================================== */

/*
Original Code
*/

function applyTax(order) {
    order.total = order.total * 1.17;
    return order;
}

const myOrder = {
    id: 1,
    total: 100
};

const taxedOrder = applyTax(myOrder);

console.log(myOrder.total);

/*
Bug:
The function directly modifies the original object.

Current Wrong Output:
117

Why?
Objects are reference types.
order and myOrder point to the same object.
*/

/*
Fixed Version
*/

function applyTaxFixed(order) {
    return {
        ...order,
        total: order.total * 1.17
    };
}

const originalOrder = {
    id: 1,
    total: 100
};

const newTaxedOrder = applyTaxFixed(originalOrder);

console.log(originalOrder.total);
// Output: 100

console.log(newTaxedOrder.total);
// Output: 117


/* ==================================================
BUG 3: Config Reset Doesn't Work
================================================== */

/*
Original Code
*/

const defaultConfig = {
    theme: 'dark',
    lang: 'en',
    nested: {
        fontSize: 14
    }
};

function resetConfig(config) {
    config = { ...defaultConfig };
    config.nested.fontSize = 14;
}

const appConfig = {
    theme: 'light',
    lang: 'ur',
    nested: {
        fontSize: 20
    }
};

resetConfig(appConfig);

console.log(appConfig.theme);
console.log(appConfig.nested.fontSize);

/*
Bug:
Reassigning parameter does not change original object.

Current Output:
theme = 'light'
fontSize = 20

Why?
config becomes a new object locally.
appConfig is never updated.
*/

/*
Fixed Version
Using structuredClone()
*/

function resetConfigFixed() {
    return structuredClone(defaultConfig);
}

const newConfig = resetConfigFixed();

console.log(newConfig.theme);
// Output: dark

console.log(newConfig.nested.fontSize);
// Output: 14