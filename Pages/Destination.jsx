import React from 'react'

function Destination() {

   const destinations = [
  {
    name: "CARIBBEAN",
    image: "/caribbean.jpg",
  },
  {
    name: "GREECE",
    image: "/greece.jpg",
  },
  {
    name: "ALASKA",
    image: "/alaska.jpg",
  },
  {
    name: "NORWAY",
    image: "/norway.jpg",
  },
];

  return (
    <>
     <section id='destination' className="bg-gradient-to-b from-teal-300 to-blue-300 py-10">
      <h2 className="text-4xl font-bold text-white text-center mb-4">DESTINATIONS</h2>
      <p className="text-white text-center mb-8">Explore the world’s most stunning places</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {destinations.map((dest,index) => (
            <div key={index} className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className='bg-white drop-shadow-lg text-center py-2 font-semibold'>{dest.name}</div>
                <img src={dest.image} className='w-full h-full object-cover' alt="" />
                </div>
        ))}
       </div>
      </section>
    </>
  )
}

export default Destination
