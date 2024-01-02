import React, { useState } from 'react';

const Cart = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Smartphone', price: 499.99 },
    { id: 2, name: 'Smartwatch', price: 199.99 },
    { id: 3, name: 'Wireless Earbuds', price: 79.99 },
  ];

  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-300">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="font-bold">Total: ${calculateTotal()}</p>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Available Products</h2>
        <ul className="divide-y divide-gray-300">
          {products.map((product) => (
            <li key={product.id} className="flex items-center justify-between py-2">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
              <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-2 py-1 rounded">
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
