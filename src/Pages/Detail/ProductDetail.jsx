import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); // null means loading, false means not found

  useEffect(() => {
    fetch("/Website/Products.json") // Correct path to the products file
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Products.json");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched products:", data);
        // Try to find product with matching id (as number or string)
        const found = data.find(
          (item) => item.id === id || item.id === Number(id)
        );
        console.log("Found product:", found);
        setProduct(found || false); // false = not found
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setProduct(false); // on error treat as not found
      });
  }, [id]);

  if (product === null) {
    return <div className="p-6 text-center">Loading product details...</div>;
  }

  if (product === false) {
    return (
      <div className="p-6 text-center text-red-600">
        Product not found or failed to load.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-purple-600 hover:underline"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-contain rounded-lg"
        />

        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="italic text-gray-600 mb-2">{product.category}</p>
          <p className="text-green-700 text-3xl font-extrabold mb-4">
            ${product.price}
          </p>
          <p className="text-yellow-500 font-semibold mb-4">⭐ {product.rating}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="font-semibold mb-6">Stock: {product.stock}</p>
          
          <button 
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => {
              // Add to cart functionality
              const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
              const existingItem = existingCart.find(item => item.id === product.id);
              
              if (existingItem) {
                // Item already exists, increase quantity
                existingItem.quantity += 1;
              } else {
                // New item, add to cart with quantity 1
                existingCart.push({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: 1
                });
              }
              
              localStorage.setItem("cartItems", JSON.stringify(existingCart));
              
              // Trigger storage event to update cart count in NavBar
              window.dispatchEvent(new Event('storage'));
              
              alert(`${product.title} added to cart!`);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
