import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Product({ id, name, price, description, img, onAddToCart }) {
  const productPath = `/products/${id}`; // Dynamic path based on the product id

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
      <Link to={productPath}>
        <img 
          src={img} 
          alt={name} 
          className="w-full h-64 object-cover" 
          onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.jpg'; }} // Default image
        />
        <h3 className="text-lg font-bold md:text-xl lg:text-2xl">{name}</h3>
      </Link>
      <div className="p-4">
        <p className="text-gray-600 text-sm md:text-base lg:text-lg">${price}</p>
        <p className="text-sm md:text-base mb-2">{description}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 mt-2 rounded transition duration-200"
          onClick={onAddToCart}
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
