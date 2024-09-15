// AdComponent.js
import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'; // Social media icons
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';  

function App() {
  // Replace 'your-username' with your actual Instagram username
  const instaDMLink = 'https://instagram.com/naqashi_i';

  const handleOrderClick = () => {
    window.open(instaDMLink, '_blank'); // Opens Instagram DM link in a new tab
  };

  return (
    <div 
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div style ={{backgroundImage : 'url(/adownload2.jpg)'}}
      className="relative bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6">
          <h1 className="text-5xl font-bold text-gray-800">NAQASHI</h1>
          <p className="text-3xl italic text-gray-500 mt-2">Calligraphy</p>
        </div>

        {/* Image Section */}
        <div className="px-5 py-5">
          <div
            className="w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: 'url(/Capture.PNG)' }} // Corrected the URL format
          ></div>
        </div>


        {/* Discount Badge */}
        <div className="absolute top-6 right-6">
          <Badge className="bg-yellow-500 text-white text-xl p-4 rounded-full shadow-md">
            25% OFF
          </Badge>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between p-6 bg-white">
          <p className="text-gray-600 font-medium">Get exclusive discounts on beautiful calligrapies ! </p>
          <Button
            variant="outline"
            className="bg-green-600 text-white hover:bg-green-700 transition-all duration-200 shadow-md"
            onClick={handleOrderClick}
          >
            ORDER NOW
          </Button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-4 pb-4">
          <a
            href="https://wa.me/03356675390" // Replace with your actual WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 text-3xl transition-colors duration-200"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/naqashi_i" // Replace with your actual Instagram profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 text-3xl transition-colors duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/amsal.aleeha" // Replace with your actual Facebook page link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-3xl transition-colors duration-200"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
