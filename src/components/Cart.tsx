import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <section id="cart" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-950 p-4 rounded-lg">
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-gray-400">Quantity: {item.quantity}</p>
                    <p className="text-blue-500">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <h3 className="text-2xl font-bold">
                Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}