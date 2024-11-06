import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.webp'; 

function SignIn({ setIsLoggedIn, setUserName }) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!inputName.trim() || !inputEmail.trim()) {
      setError('Name and email are required.');
      return;
    }
    setError('');
    setUserName(inputName);
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <label htmlFor="username" className="sr-only">Enter your name</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <label htmlFor="email" className="sr-only">Enter your email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button className="bg-blue-500 text-white p-2 rounded w-full" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
