import React from 'react'

function HorizonatalCard() {
  return (
    <div className='bg-gray-600 rounded-3xl w-full pt-10 px-10 flex my-10 h-80'>
        <div className='text-white'>
            <h1 className='text-4xl font-semibold'>Stake SPA</h1>
            <h3 className='font-light text-lg py-5'>Stake SPA to receive protocol fees, share of USDs auto-yield and staking incentives</h3>
            <h3 className='font-light text-lg py-5'>The longer you stake, higher your reward rate and voting power</h3>
            <div className='flex items-center space-x-8 py-3'>
                <a href="" className='flex items-center space-x-1'>
                    <p>Stake SPA</p>
                    <img src="../../uparrow.svg" alt="Up Arrow" />
                </a>
                <a href="" className='flex items-center space-x-1'>
                    <p>Learn More</p>
                    <img src="../../uparrow.svg" alt="Up Arrow" />
                </a>
            </div>
        </div>
        <img src="../../stake.svg" alt="" className='relative bottom-0'/>
    </div>
  )
}

export default HorizonatalCard