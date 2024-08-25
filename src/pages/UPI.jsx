
import React from 'react';
import upi from '../assets/UPI.jpg';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { HiHome } from "react-icons/hi";

const UPI = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route location

  // Determine the Google Form link based on the current route
  const googleFormLink =
    location.pathname === '/upi'
      ? 'https://forms.gle/P2JaT4opDSn1UwE29' // Link for '/upi' route
      : 'https://google.com'; // Link for '/register' route (or any other route)

  return (
    <div className="h-screen flex flex-col justify-between items-center text-white p-4">
      {/* Go Home Button at the Top */}
      <button
        onClick={() => navigate('/')}
        className="absolute left-4 top-0 mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-green-600"
      >
        <HiHome />
      </button>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-3xl font-bold mb-8 animate-pulse">Pay on the QR</h1>

        {/* QR Code Image Container */}
        <div className="relative group max-w-xs md:max-w-sm lg:max-w-md">
          <img
            src={upi}
            alt="upi"
            className="w-full h-auto max-w-full rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <p className="text-sm text-white">Scan to Pay</p>
          </div>
        </div>

        {/* Google Form Button */}
        <a
          href={googleFormLink} // Use the dynamic Google Form link
          target='_blank'
          rel="noopener noreferrer"
          className="mt-8 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-600"
        >
          Google Form
        </a>
      </div>

      {/* Empty Div for Flexbox Space Adjustments */}
      <div className="mb-4"></div>
    </div>
  );
};

export default UPI;
