import React from 'react'
import Navbar from '../components/Navbar'
import LandingScreenOne from '../components/LandingScreenOne'
import Investor from '../components/Investor'
import LandingScreenTwo from '../components/LandingScreenTwo'
import LandingScreenThree from '../components/LandingScreenThree'
import LandingScreenFour from '../components/LandingScreenFour'
import LandingScreenFive from '../components/LandingScreenFive'
import LandingScreenSix from '../components/LandingScreenSix'
import LandingScreenSeven from '../components/LandingScreenSeven'

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
            <LandingScreenFive />
            <LandingScreenSix />
            <LandingScreenSeven />
        </section>
        </div>
    </div>
  )
}

export default Landing