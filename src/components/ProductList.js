import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products, onAddToCart }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold md:text-xl lg:text-2xl">{product.name}</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">${product.price}</p>
            <p className="text-sm md:text-base mb-2">{product.description}</p>
            
            <Link 
              to={`/products/${product.id}`} 
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 mt-2 rounded transition duration-200"
              aria-label={`View details for ${product.name}`}
            >
              View Details
            </Link>
            <button 
              className="bg-green-500 hover:bg-green-600 text-white p-2 mt-2 rounded transition duration-200"
              onClick={() => onAddToCart(product)} // Assuming onAddToCart is passed as a prop
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
