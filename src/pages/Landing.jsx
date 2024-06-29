import React from 'react'
import Navbar from '../components/Navbar'
import LandingScreenOne from '../components/LandingScreenOne'
import Investor from '../components/Investor'
import LandingScreenTwo from '../components/LandingScreenTwo'
import LandingScreenThree from '../components/LandingScreenThree'
import LandingScreenFour from '../components/LandingScreenFour'

function Landing() {
  
  return (
    <div className='w-screen bg-gray-800 flex justify-center'>
        <div className='w-full flex items-center flex-col'>
        <section className='h-screen flex items-center flex-col '>
            <Navbar />
            <LandingScreenOne />
        </section>
        <section className='w-full flex items-center flex-col '>
            <Investor />
        </section>
        <section className='w-full flex items-center flex-col'>
            <LandingScreenTwo />
            <LandingScreenThree />
            <LandingScreenFour />
        </section>
        </div>
    </div>
  )
}

export default Landing