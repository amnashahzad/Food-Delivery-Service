// Sample menu data
const menuItems = [
    { name: 'Pizza', price: 9.99 },
    { name: 'Burger', price: 6.99 },
    { name: 'Pasta', price: 8.99 },
    { name: 'Salad', price: 5.99 }
  ];
  
  // Function to generate menu items dynamically
  function generateMenu() {
    const menuSection = document.getElementById('menu');
  
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
  
      const name = document.createElement('span');
      name.textContent = item.name;
  
      const price = document.createElement('span');
      price.textContent = `$${item.price.toFixed(2)}`;
  
      const addToCartBtn = document.createElement('button');
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.addEventListener('click', () => addToCart(item));
  
      menuItem.appendChild(name);
      menuItem.appendChild(price);
      menuItem.appendChild(addToCartBtn);
  
      menuSection.appendChild(menuItem);
    });
  }
  
  // Function to add items to the cart
  function addToCart(item) {
    const cartSection = document.getElementById('cart-items');
  
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
  
    const itemName = document.createElement('span');
    itemName.textContent = item.name;
  
    const itemPrice = document.createElement('span');
    itemPrice.textContent = `$${item.price.toFixed(2)}`;
  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeFromCart(cartItem));
  
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(removeBtn);
  
    cartSection.appendChild(cartItem);
  }
  
  // Function to remove items from the cart
  function removeFromCart(item) {
    const cartSection = document.getElementById('cart-items');
    cartSection.removeChild(item);
  }
  
  // Initialize the menu
  generateMenu();
  