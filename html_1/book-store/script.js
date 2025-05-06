console.log("Welcome to BookBag Co.");

// Variables using different data types
let cartTotal = 0;             // number
let itemCount = 0;             // number
const maxItems = 10;           // number
let shopOpen = true;           // boolean
let storeName = "BookBag Co."; // string

function addToCart(price) {
  if (!shopOpen) {
    alert("Sorry, we're closed!");
    return;
  }

  cartTotal += price;
  itemCount++;

  const cartSummary = document.getElementById("cart-summary");
  cartSummary.textContent = `Items in cart: ${itemCount} | Total: $${cartTotal.toFixed(2)}`;

  console.log(`Added $${price}. New total: $${cartTotal.toFixed(2)}`);

  // Math + if/else + logical operator
  if (itemCount > maxItems || cartTotal > 500) {
    alert("Cart limit reached or total exceeded $500. Please checkout.");
  } else if (itemCount > 5 && cartTotal < 500) {
    console.log("You're a frequent shopper!");
  } else {
    console.log("Keep shopping!");
  }
}
console.log("Welcome to BookBag Co.");

let cartTotal = 0;
let itemCount = 0;
const maxItems = 10;
let shopOpen = true;
let storeName = "BookBag Co.";

function addToCart(price) {
  if (!shopOpen) {
    alert("Sorry, we're closed!");
    return;
  }

  cartTotal += price;
  itemCount++;

  const cartSummary = document.getElementById("cart-summary");
  cartSummary.textContent = `Items in cart: ${itemCount} | Total: $${cartTotal.toFixed(2)}`;

  console.log(`Added $${price}. New total: $${cartTotal.toFixed(2)}`);

  if (itemCount > maxItems || cartTotal > 500) {
    alert("Cart limit reached or total exceeded $500. Please checkout.");
  } else if (itemCount > 5 && cartTotal < 500) {
    console.log("You're a frequent shopper!");
  } else {
    console.log("Keep shopping!");
  }
}
