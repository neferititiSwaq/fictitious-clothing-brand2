import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetails({ products, onAddToCart }) {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === parseInt(id)); 

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-blue-500 hover:underline">
          Go back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img src={product.img} alt={product.name} className="w-full max-w-md object-cover mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-4">${product.price}</p>
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded" 
        onClick={() => onAddToCart(product)} 
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
