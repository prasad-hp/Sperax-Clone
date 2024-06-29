import React from 'react'
import CardSrnFive from './CardSrnFive'

function LandingScreenFive() {
  return (
    <div className='w-8/12'>
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex justify-between items-center w-full my-10'>
                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-white font-light text-xl'>Total Supply</h3>
                    <div className='flex justify-center items-center space-x-1 text-7xl font-medium'>
                        <h1 className='text-white'>4.590 B</h1>
                        <h1 className='text-gray-400'>SPA</h1>
                    </div>
                </div>
                <div className='w-1/2 flex justify-end items-center'>
                    <div className='flex flex-col items-start'>
                        <h3 className='text-white font-light text-xl'>Circulating Supply</h3>
                        <div className='flex justify-center items-center space-x-1 text-7xl font-medium'>
                            <h1 className='text-white'>1.679 B</h1>
                            <h1 className='text-gray-400'>SPA</h1>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center text-4xl font-light text-white'>
                <h2>
                    SPA is the value accrual and governance token
                </h2>
                <h2 className='flex justify-center space-x-3'>
                    <h2>for the</h2>
                    <h2 className='text-cyan-500'>Sperax ecosystem</h2>
                </h2>
            </h2>
            <div className='flex justify-between items-center space-x-5'>
                <CardSrnFive icon={"../../burnt.svg"} alt={"Burnt"} heading={"Burnt"} desc={"Expansion and adoption of USDs will lead to burning of SPA. 25% of all protocol revenue is used to buy and burn SPA from the open market."} desc2={"Total SPA Burnt"} end={"409.732 M SPA"} />
                <CardSrnFive icon={"../../locked.svg"} alt={"Locked"} heading={"Locked"} desc={"Locking SPA tokens (via veSPA) is manadatory to receive protocol rewards and to participate in Sperax governance. "} desc2={"Total SPA Locked"} end={"391.668 M SPA"} />
                <CardSrnFive icon={"../../buyback.svg"} alt={"Buyback"} heading={"Buyback"} desc={"SPA is bought on the open market using protocol fees and yield generated from USDs. This maintains constant buying pressure for SPA"} desc2={"Total Buyback"} end={"SPA"} />
            </div>
            <button className='w-48 bg-cyan-500 rounded-full h-14 font-semibold text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer my-20'>Get SPA Token</button>
        </div>
    </div>
  )
}

export default LandingScreenFive