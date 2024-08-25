

import React from 'react';
import upi from '../assets/UPI.jpg';

const UPI = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-8 animate-pulse">Pay on the QR</h1>
      <div className="relative group max-w-xs md:max-w-sm lg:max-w-md">
        <img
          src={upi}
          alt="upi"
          className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-3"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <p className="text-sm text-white">Scan to Pay</p>
        </div>
      </div>
      <a
        href="https://forms.gle/P2JaT4opDSn1UwE29"
        target='_blank'
        className="mt-8 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-600"
      >
        Google Form
      </a>
    </div>
  );
};

export default UPI;
