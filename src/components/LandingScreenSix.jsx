import React from 'react'
import HorCardSnSix from './HorCardSnSix'

function LandingScreenSix() {
  return (
    <div className='w-8/12'>
        <div className='flex flex-col items-center justify-center text-white text-center mt-14'>
            <h1 className='text-6xl font-medium'>Governance</h1>
            <h3 className='font-light text-xl w-7/12 py-8'>Sperax Ecosystem is Governed by Community of SPA Stakers or veSPA Holders.</h3>
          <div className='grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-2 gap-5'>
            <HorCardSnSix image={"../../speraxforum.svg"} alt={"Sperax Icon"} heading={"Sperax Forum"} desc={"Governance Category in the Forum is used for governance proposal discussion."} link={"Go to Forum"}/>
            <HorCardSnSix image={"../../snapshot.svg"} alt={"Snapshot Icon"} heading={"Snapshot"} desc={"Snapshot polls are used to gauge community sentiment around the proposals."} link={"Go to Snapshot"}/>
          </div>
            <h2 className='text-3xl font-medium py-8 pt-16'>The Governance Process</h2> 
          <div className='w-full md:inline-block hidden'>
            <div className='flex justify-between items-center py-2 xl:px-10 md:px-5 rounded-3xl bg-gray-600'>
              <div className='flex justify-start items-center lg:space-x-3 space-x-1'>
                <img src="../../governance.svg" alt="Governance" className='w-20'/>
                <div className='flex flex-col items-start justify-center space-y-2'>
                    <h4 className='text-white font-light text-lg'>Off-Chain Governance Process</h4>
                    <div className='flex items-center justify-start space-x-2'>
                      <div className='w-7 h-7 rounded-full bg-cyan-500 p-1 flex justify-center items-center'>1</div>
                      <p className='text-sm'>Proposal Discussion</p>
                      <img src="../../line.svg" alt="Line" className='xl:px-4 px-1'/>
                      <div className='w-7 h-7 rounded-full bg-cyan-500 p-1 flex justify-center items-center'>2</div>
                      <p className='text-sm'>Snapshot Vote</p>
                      <img src="../../line.svg" alt="Line" className='xl:px-4 px-1'/>
                      <div className='w-7 h-7 rounded-full bg-cyan-500 p-1 flex justify-center items-center'>3</div>
                      <p className='text-sm'>Sperax Improvement Plan</p>
                    </div>
                </div>
              </div>
              <div>
                <button className='lg:w-36 bg-cyan-500 rounded-full h-12 font-medium text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer flex items-center justify-center'>Learn more →</button>
              </div>
            </div>
          </div>
          <div className='w-10/12 md:hidden inline-block'>
            <div className='flex flex-col justify-between items-center py-2 xl:px-10 md:px-5 rounded-3xl bg-gray-600'>
              <div className='flex flex-col justify-start items-center space-y-1'>
                <img src="../../governance.svg" alt="Governance" className='w-20'/>
                <div className='flex flex-col items-center justify-center space-y-2'>
                    <h4 className='text-white font-light text-lg'>Off-Chain Governance Process</h4>
                    <div className='flex flex-col items-center justify-center space-y-2'>
                      <div className='w-7 h-7 rounded-full bg-cyan-500 p-1 flex justify-center items-center'>1</div>
                      <p className='text-sm'>Proposal Discussion</p>
                      <img src="../../vertical_line.svg" alt="Line" className='xl:px-4 px-1'/>
                      <div className='w-7 h-7 rounded-full bg-cyan-500 p-1 flex justify-center items-center'>2</div>
                      <p className='text-sm'>Snapshot Vote</p>
                      <img src="../../vertical_line.svg" alt="Line" className='xl:px-4 px-1'/>
                      <div className='w-7 h-7 rounded-full bg-cyan-500 p-1 flex justify-center items-center'>3</div>
                      <p className='text-sm'>Sperax Improvement Plan</p>
                    </div>
                </div>
              </div>
              <div>
                <button className='w-36 mt-3 bg-cyan-500 rounded-full h-12 font-medium text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer flex items-center justify-center'>Learn more →</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingScreenSix