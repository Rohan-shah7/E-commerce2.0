import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/website/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.error("Failed to load product details", err));
  }, [id]);

  if (!product) {
    return <div className="p-6 text-center">Loading product details...</div>;
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
          <p className="text-green-700 text-3xl font-extrabold mb-4">${product.price}</p>
          <p className="text-yellow-500 font-semibold mb-4">⭐ {product.rating}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="font-semibold">Stock: {product.stock}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
