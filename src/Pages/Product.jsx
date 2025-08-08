// src/Pages/Product.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Website/Products.json") // public folder fetch
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products", err));
  }, []);

  // Add to Cart Function
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const itemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      // If product already exists, increase quantity
      existingCart[itemIndex].quantity += 1;
    } else {
      // If new product, add with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-300 rounded-xl shadow-lg p-0 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain rounded-t-xl"
            />

            <div className="bg-gradient-to-br from-purple-300 to-purple-100 rounded-b-xl p-5 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {product.title}
              </h2>
              <p className="text-sm italic text-gray-700 mb-2">
                {product.category}
              </p>
              <p className="text-green-700 font-extrabold text-xl mb-1">
                ${product.price}
              </p>
              <p className="text-yellow-500 font-semibold mb-4">
                ⭐ {product.rating}
              </p>

              <div className="mt-auto flex gap-3">
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  View Details
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
