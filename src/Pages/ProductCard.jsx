import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:scale-[1.02]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="font-bold text-lg text-gray-800 truncate">{product.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between mt-1">
            <span className="text-indigo-600 font-semibold text-lg">
              ${product.price}
            </span>
            <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
              ⭐ {product.rating}
            </span>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Stock: {product.stock}</span>
            <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
