// Define variables for the shopping cart and cart total
let cart = [];
let cartTotal = 0;

// Define a function to add a product to the cart
function addToCart(product) {
  // Add the product to the cart array
  cart.push(product);
  
  // Update the cart total
  cartTotal += product.price;
  
  // Update the cart display in the navigation bar
  updateCartDisplay();
}

// Define a function to update the cart display in the navigation bar
function updateCartDisplay() {
  // Find the cart element in the DOM
  let cartElement = document.querySelector('.cart');
  
  // Update the text of the cart element to show the number of items and the total price
  cartElement.innerHTML = `<a href="cart.html">Cart (${cart.length}) - $${cartTotal.toFixed(2)}</a>`;
}

// Define a function to populate the cart page with the items in the cart
function populateCart() {
  // Find the cart element in the DOM
  let cartElement = document.querySelector('.cart-items');
  
  // Clear the current contents of the cart element
  cartElement.innerHTML = '';
  
  // Loop through the items in the cart and add them to the cart element
  cart.forEach(function(product) {
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div class="cart-item-name">${product.name}</div>
      <div class="cart-item-price">$${product.price.toFixed(2)}</div>
    `;
    cartElement.appendChild(cartItem);
  });
  
  // Update the cart total on the page
  let cartTotalElement = document.querySelector('.cart-total');
  cartTotalElement.innerHTML = `$${cartTotal.toFixed(2)}`;
}


// Define a function to submit the payment form
function submitPayment(event) {
  // Prevent the form from actually submitting
  event.preventDefault();
  
  // Reset the cart and cart total
  cart = [];
  cartTotal = 0;
  
  // Update the cart display in the navigation bar
  updateCartDisplay();
  
  // Display a message to the user indicating that their payment was successful
  alert('Payment successful!');
  
  // Redirect the user back to the home page
  window.location.href = 'index.html';
}

// Add event listeners to the Add to Cart buttons on the product page
let addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Get the product data from the button's data attributes
    let productName = button.dataset.name;
    let productPrice = parseFloat(button.dataset.price);
    
    // Create a new product object with the data
    let product = {
      name: productName,
      price: productPrice
    };
    
    // Add the product to the cart
    addToCart(product);
    
    // Display a message to the user indicating that the product was added to the cart
    alert(`${productName} added to cart!`);
  });
});

// Add event listener to the payment form submit button
let paymentForm = document.querySelector('.payment-form');
paymentForm.addEventListener('submit', submitPayment);
