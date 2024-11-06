import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.webp';

function LandingPage() {
  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Style</h2>
          <p className="text-lg mb-8">Premium quality fashion for all occasions.</p>
          
          {/* Link wrapping the button */}
          <Link to="/products">
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded transition duration-200" aria-label="Shop Now">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
