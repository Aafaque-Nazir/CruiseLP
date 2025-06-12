import React from 'react'

function Contact() {
  return (
    <>
    <div id='contact' className='w-full  min-h-screen flex flex-col pb-28 bg-gradient-to-b to-teal-300 from-blue-300 '>
       
        <div className=' space-x-6  w-full max-w-4xl mx-auto p-10 mt-24 bg-white rounded-3xl shadow-xl'>
            <form className='space-y-6'
             action="https://formsubmit.co/aafaquebuisness@gmail.com" 
            method="POST" 
            encType="multipart/form-data"
            >
            <h1 className='text-5xl font-bold text-center my-6'>Contact Us</h1>
                <div>
                    <label className='block text-gray-700' htmlFor='name'>Name</label>
                    <input className='w-full p-3 shadow-lg border border-gray-500 rounded-lg' type='text' id='name' name='name' required />
                </div>
                <div>
                    <label className='block text-gray-700' htmlFor='email'>Email</label>
                    <input className='w-full p-3 shadow-lg border border-gray-500 rounded-lg' type='email' id='email' name='email' required />
                </div>
                <div>
                    <label className='block text-gray-700' htmlFor='message'>Message</label>
                    <textarea className='w-full p-3 shadow-lg border border-gray-500 rounded-lg' id='message' name='message' rows='5' required></textarea>
                </div>
                <button className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200'>Send Message</button>
            </form>
            </div>
    </div>

    </>
  )
}

export default Contact
