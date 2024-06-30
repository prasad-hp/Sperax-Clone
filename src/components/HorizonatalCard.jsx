import React from 'react'

function HorizonatalCard() {
  return (
    <div className='bg-new-cement rounded-3xl w-full pt-10 lg:px-10 px-5 lg:flex lg:justify-betweens inline-block my-10 lg:h-80 h-auto'>
        <div className='text-white'>
            <h1 className='text-4xl font-semibold'>Stake SPA</h1>
            <h3 className='font-light text-lg py-5'>Stake SPA to receive protocol fees, share of USDs auto-yield and staking incentives</h3>
            <h3 className='font-light text-lg py-5'>The longer you stake, higher your reward rate and voting power</h3>
            <div className='flex items-center lg:justify-start justify-center space-x-8 py-3'>
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