import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import SignIn from './components/SignIn'; 
import Footer from './components/Footer'; 
import { Helmet } from 'react-helmet';
import tshirt from './assets/tshirt.webp';
import jeans from './assets/jeans.webp';
import sneakers from './assets/sneakers.webp';

const products = [
  { id: 1, name: 'T-shirt', price: 80, description: 'Comfortable cotton T-shirt', img: tshirt },
  { id: 2, name: 'Jeans', price: 50, description: 'Stylish skinny jeans', img: jeans },
  { id: 3, name: 'Sneakers', price: 80, description: 'Trendy casual sneakers', img: sneakers },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState('Guest');

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <Helmet>
          <title>Fashion House</title>
        </Helmet>
        <Header isLoggedIn={isLoggedIn} userName={userName} handleLogin={() => setIsLoggedIn(!isLoggedIn)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
            <Route 
              path="/products" 
              element={
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                  {products.map((product) => (
                    <Product 
                      key={product.id} 
                      {...product} 
                      onAddToCart={() => handleAddToCart(product)} 
                    />
                  ))}
                </section>
              } 
            />
            <Route 
              path="/products/:id" 
              element={<ProductDetails products={products} />} 
            />
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
