import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../src/components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      {/* main */}
      <div className="relative "
      id='home'>
        <div className="relative w-[95vw] max-w-6xl h-[60vh] sm:h-[70vh] md:h-[80vh] mx-auto rounded-2xl shadow-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/CruiseShip.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 text-white">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-xl">
              ENJOY A LUXURY CRUISE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-md mt-4">
              Experience the journey of lifetime with our world class tour packages
            </p>
            <motion.a
              href="https://wa.me/919325629256?text=Hi%2C%20I%20am%20interested%20in%20your%20cruise%20packages"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ transition: { duration: 0.3 } }}
            >
              <button className="cursor-pointer bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-6 mt-6 rounded shadow- text-base sm:text-lg">
                WhatsApp
              </button>
            </motion.a>
            <motion.a
              href="tel:+919325629256"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ transition: { duration: 0.3 } }}
            >
              <button className="cursor-pointer bg-blue-500 md:hidden hover:bg-blue-600 text-white font-bold py-2 px-6 mt-6 rounded shadow-xl text-base sm:text-lg">
                Call Now
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;