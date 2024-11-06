// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 My Brand. All Rights Reserved.</p>
      <p>
        <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
        <a href="/terms" className="text-blue-400 hover:underline"> Terms of Service</a>
      </p>
    </footer>
  );
}

export default Footer;
