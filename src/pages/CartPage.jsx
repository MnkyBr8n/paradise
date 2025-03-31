import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-green-600">Start shopping</Link>.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border p-4 rounded shadow">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-green-600">${item.price.toFixed(2)} each</p>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-300 px-2 rounded" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="bg-gray-300 px-2 rounded" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button className="ml-4 text-red-500 hover:underline" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-xl">Total Items: {totalItems}</p>
            <p className="text-2xl font-bold text-green-700">Total: ${totalPrice.toFixed(2)}</p>
            <div className="mt-4">
              <Link to="/products">
                <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Continue Shopping</button>
              </Link>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;