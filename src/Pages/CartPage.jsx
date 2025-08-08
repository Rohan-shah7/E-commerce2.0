// src/Pages/CartPage.jsx
import { useState, useEffect } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("CartPage rendered, cartItems:", cartItems);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    console.log("Loaded from localStorage:", storedCart);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setLoading(false);
  }, []);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      );
      // Update localStorage immediately
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      // Trigger storage event to update cart count in NavBar
      window.dispatchEvent(new Event('storage'));
      return updatedCart;
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      // Update localStorage immediately
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      // Trigger storage event to update cart count in NavBar
      window.dispatchEvent(new Event('storage'));
      return updatedCart;
    });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white rounded-lg shadow p-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <p className="w-20 text-right font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total</h2>
            <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout */}
          <button className="w-full mt-6 py-3  bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
