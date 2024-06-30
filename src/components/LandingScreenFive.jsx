import React from 'react';
import CardSrnFive from './CardSrnFive';

function LandingScreenFive() {
  return (
    <div className='w-11/12 lg:w-8/12 mx-auto'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex lg:flex-row flex-col justify-between items-center w-full my-10 space-y-5'>
          <div className='lg:w-1/2 w-full lg:flex lg:flex-col lg:items-start'>
            <h3 className='text-white font-light text-xl text-center lg:text-left'>Total Supply</h3>
            <div className='flex justify-center lg:justify-start items-center space-x-1 text-4xl lg:text-7xl font-medium'>
              <h1 className='text-white'>4.590 B</h1>
              <h1 className='text-gray-400'>SPA</h1>
            </div>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center lg:justify-end items-center'>
            <div className='lg:flex lg:flex-col lg:items-start'>
              <h3 className='text-white font-light text-xl text-center lg:text-left'>Circulating Supply</h3>
              <div className='flex justify-center lg:justify-start items-center space-x-1 text-4xl lg:text-7xl font-medium'>
                <h1 className='text-white'>1.679 B</h1>
                <h1 className='text-gray-400'>SPA</h1>
              </div>
            </div>
          </div>
        </div>
        <h2 className='text-center lg:text-left text-3xl lg:text-4xl font-light text-white'>
          SPA is the value accrual and governance token
        </h2>
        <div className='text-center lg:text-left text-3xl lg:text-2xl text-white'>
          <span>for the </span>
          <span className='text-new-blue text-3xl'>Sperax ecosystem</span>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:w-full w-11/12 lg:gap-5 gap-1 mt-10'>
          <CardSrnFive icon={"../../burnt.svg"} alt={"Burnt"} heading={"Burnt"} desc={"Expansion and adoption of USDs will lead to burning of SPA. 25% of all protocol revenue is used to buy and burn SPA from the open market."} desc2={"Total SPA Burnt"} end={"409.732 M SPA"} />
          <CardSrnFive icon={"../../locked.svg"} alt={"Locked"} heading={"Locked"} desc={"Locking SPA tokens (via veSPA) is mandatory to receive protocol rewards and to participate in Sperax governance. "} desc2={"Total SPA Locked"} end={"391.668 M SPA"} />
          <CardSrnFive icon={"../../buyback.svg"} alt={"Buyback"} heading={"Buyback"} desc={"SPA is bought on the open market using protocol fees and yield generated from USDs. This maintains constant buying pressure for SPA"} desc2={"Total Buyback"} end={"SPA"} />
        </div>
        <button className='w-3/4 lg:w-48 bg-new-blue rounded-full h-14 font-semibold text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer mt-10'>Get SPA Token</button>
      </div>
    </div>
  );
}

export default LandingScreenFive;
