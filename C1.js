// Task 1: Predict Output (with explanation comments)
var cartA = { owner: 'Asad', items: [{ name: 'Laptop', price: 150000 }], total: 150000 };
var cartB = cartA;

// cartB is NOT a copy — it's the same reference as cartA
cartB.items.push({ name: 'Mouse', price: 2500 });
cartB.total = cartB.total + 2500;

console.log('Tab 1 cart items:', cartA.items.length);  
// Output: 2
// Explanation: cartA and cartB point to the SAME object, so change reflects in both

console.log('Tab 1 total:', cartA.total);              
// Output: 152500
// Explanation: total updated through cartB also affects cartA

function applyPromo(cart, discount) {
  cart.total = cart.total - discount;
  cart.promoApplied = true;
  return cart;
}

const originalCart = { owner: 'Sara', items: ['Book'], total: 500 };
const discountedCart = applyPromo(originalCart, 50);

console.log('Original total:', originalCart.total);    
// Output: 450
// Explanation: function MUTATED originalCart directly

//Task 2: Bugs Identification
var cartB = cartA;
// ❌ BUG: This does NOT create a copy. It only copies reference.
// Any change in cartB affects cartA.

cartB.items.push({ name: 'Mouse', price: 2500 });
// ❌ BUG (design issue): mutation of shared nested array.

cartB.total = cartB.total + 2500;
// ❌ BUG: modifying shared object state (cartA also changes).

function applyPromo(cart, discount) {
  cart.total = cart.total - discount;
// ❌ BUG: function MUTATES input object instead of returning new one.

  cart.promoApplied = true;
// ❌ BUG: side effect — modifies original object.

  return cart;
// ❌ BAD PRACTICE: returning mutated input instead of new object.
}

//Task 3: Fixed Version (Deep Copy + No Mutation + let/const)
// FIXED CART COPY (deep copy)
const cartA = {
  owner: 'Asad',
  items: [{ name: 'Laptop', price: 150000 }],
  total: 150000
};

// Deep copy (important for nested objects)
const cartB = structuredClone(cartA);

// Now independent
cartB.items.push({ name: 'Mouse', price: 2500 });
cartB.total += 2500;

console.log('Tab 1 cart items:', cartA.items.length); // 1
console.log('Tab 1 total:', cartA.total);             // 150000


// FIXED PROMO FUNCTION (NO MUTATION)
function applyPromo(cart, discount) {
  return {
    ...cart,
    total: cart.total - discount,
    promoApplied: true
  };
}

const originalCart = { owner: 'Sara', items: ['Book'], total: 500 };
const discountedCart = applyPromo(originalCart, 50);

console.log('Original total:', originalCart.total);     // 500
console.log('Discounted total:', discountedCart.total); // 450

//Task 4: addItem Function (Immutable)
function addItem(cart, item) {
  return {
    ...cart,
    items: [...cart.items, item],
    total: cart.total + item.price
  };
}

// PROOF
const myCart = {
  owner: 'Ali',
  items: [],
  total: 0
};

const newCart = addItem(myCart, { name: 'Phone', price: 20000 });

console.log('Original cart:', myCart);
// { items: [], total: 0 }

console.log('New cart:', newCart);
// { items: [{ name: 'Phone', price: 20000 }], total: 20000 }