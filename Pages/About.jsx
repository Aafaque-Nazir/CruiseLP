import React from 'react';

function About() {
  return (
    <section id='about' className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/CruiseShip.jpg"
            alt="Luxury Cruise"
            className="rounded-lg shadow-xl w-full object-cover h-80"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About Us</h2>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Who We Are</h3>
          <p className="text-gray-700 mb-6">
            At <span className="font-semibold text-blue-700">CruiseShip</span>, we believe every journey should be unforgettable. With years of experience, our team curates world-class cruise experiences, blending luxury, adventure, and comfort. Whether you seek relaxation or exploration, we have the perfect voyage for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-700 text-2xl">🛳️</span>
              <span className="font-medium text-gray-800">Luxury Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-700 text-2xl">🌍</span>
              <span className="font-medium text-gray-800">World Destinations</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-700 text-2xl">⭐</span>
              <span className="font-medium text-gray-800">Premium Service</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-700 text-2xl">📞</span>
              <span className="font-medium text-gray-800">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;