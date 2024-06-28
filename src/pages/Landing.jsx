import React from 'react'
import Navbar from '../components/Navbar'
import LandingScreenOne from '../components/LandingScreenOne'

function Landing() {
  return (
    <div className='w-screen bg-gray-800 flex justify-center'>
        <div className='w-full flex items-center flex-col'>
        <section className='h-screen flex items-center flex-col '>
            <Navbar />
            <LandingScreenOne />
        </section>
        </div>
    </div>
  )
}

export default Landing