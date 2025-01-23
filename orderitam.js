document.addEventListener('DOMContentLoaded', function() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const proceedToOrderBtn = document.getElementById('proceed-to-order-btn');
 const totalCostElement = document.getElementById('total-cost');

  function updateCartDisplay() {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      if (cart.length > 0) {
           cartItemsContainer.innerHTML = '';
          cart.forEach((item, index) => {
              const itemDiv = document.createElement('div');
              itemDiv.classList.add('cart-item');
               itemDiv.innerHTML = `
                        <p><strong>${item.name}</strong> - Price: ${item.price}</p>
                         <label for="quantity-${index}">Quantity:</label>
                         <input type="number" id="quantity-${index}" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
                         <button class="remove-item-btn" data-index="${index}">Remove</button>
                    `;
                 cartItemsContainer.appendChild(itemDiv);
          });
        attachQuantityChangeListeners();
          attachRemoveButtonListeners();
        calculateTotalCost();
     } else {
        cartItemsContainer.innerHTML = '<p>No items in cart.</p>';
          totalCostElement.textContent = '0.00';
      }
}

function attachQuantityChangeListeners() {
     const quantityInputs = document.querySelectorAll('.quantity-input');
     quantityInputs.forEach(input => {
         input.addEventListener('change', function() {
             const index = parseInt(this.getAttribute('data-index'), 10);
              const newQuantity = parseInt(this.value, 10);
              updateQuantity(index, newQuantity);
          });
     });
}

function updateQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart[index]) {
        cart[index].quantity = newQuantity;
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartDisplay();
      }
  }

function attachRemoveButtonListeners() {
      const removeButtons = document.querySelectorAll('.remove-item-btn');
       removeButtons.forEach(button => {
           button.addEventListener('click', function() {
               const index = parseInt(this.getAttribute('data-index'), 10);
               removeItem(index);
            });
      });
 }

 function removeItem(index) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
         if (cart[index]) {
            cart.splice(index, 1);
             localStorage.setItem('cart', JSON.stringify(cart));
              updateCartDisplay();
        }
  }

function calculateTotalCost() {
   let cart = JSON.parse(localStorage.getItem('cart') || '[]');
   let total = 0;
  cart.forEach(item => {
       total += item.price * item.quantity;
     });
     totalCostElement.textContent = total.toFixed(2);
 }

proceedToOrderBtn.addEventListener('click', function() {
   let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      if(cart.length > 0){
        alert('Your order has been placed! (This is a demo confirmation).');
      }else{
          alert("You cart is empty!");
         }
    });

// Add a storage event listener to update the cart display when local storage changes
  window.addEventListener('storage', function(event) {
    if (event.key === 'cart') {
      updateCartDisplay();
      }
   });
   updateCartDisplay();
});





/**
* navbar toggle
*/

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
   navbar.classList.toggle("active");
   this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
   navbarLinks[i].addEventListener("click", function () {
       navbar.classList.toggle("active");
       menuToggleBtn.classList.toggle("active");
   });
}

document.addEventListener('DOMContentLoaded', function() {
  const orderItemButton = document.getElementById('order-item-btn');
 orderItemButton.addEventListener('click', function() {
       window.location.href = 'foodmenu.html'; // Redirect to the order item page
    });
});

