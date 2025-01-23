
document.addEventListener('DOMContentLoaded', function() {
    const orderNowButtons = document.querySelectorAll('.order-now-btn');
  
    orderNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.food-menu-card'); // Changed selector
            const name = menuItem.getAttribute('data-name');
            const price = parseFloat(menuItem.getAttribute('data-price'));
            const item = { name, price, quantity: 1 };
  
            // Get existing cart items from local storage
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push(item); // Add the new item
            localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
  
            //Dispatch storage event on windows to update orderitem page
            window.dispatchEvent(new Event('storage'));
           });
     });
  });
  
  
  
  
   
   'use strict';
  
  
  
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
         window.location.href = 'orderitem.html'; // Redirect to the order item page
      });
  });
  
  