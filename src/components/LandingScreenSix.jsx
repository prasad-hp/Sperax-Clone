import React from 'react'
import HorCardSnSix from './HorCardSnSix'

function LandingScreenSix() {
  return (
    <div className='lg:w-8/12 w-11/12'>
        <div className='flex flex-col items-center justify-center text-white text-center mt-14'>
            <h1 className='text-6xl font-medium'>Governance</h1>
            <h3 className='font-light text-xl lg:w-7/12 w-11/12 py-8'>Sperax Ecosystem is Governed by Community of SPA Stakers or veSPA Holders.</h3>
          <div className='w-full grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-2 gap-5'>
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
                      <div className='w-7 h-7 rounded-full bg-new-blue p-1 flex justify-center items-center'>1</div>
                      <p className='text-sm'>Proposal Discussion</p>
                      <img src="../../line.svg" alt="Line" className='xl:px-4 px-1'/>
                      <div className='w-7 h-7 rounded-full bg-new-blue p-1 flex justify-center items-center'>2</div>
                      <p className='text-sm'>Snapshot Vote</p>
                      <img src="../../line.svg" alt="Line" className='xl:px-4 px-1'/>
                      <div className='w-7 h-7 rounded-full bg-new-blue p-1 flex justify-center items-center'>3</div>
                      <p className='text-sm'>Sperax Improvement Plan</p>
                    </div>
                </div>
              </div>
              <div>
                <button className='lg:w-36 bg-new-blue rounded-full h-12 font-medium text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer flex items-center justify-center'>Learn more →</button>
              </div>
            </div>
          </div>
          <div className='w-11/12 md:hidden inline-block'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col w-full justify-between py-5 items-center xl:px-10 md:px-5 rounded-3xl bg-new-cement'>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <img src="../../governance.svg" alt="Governance" className='w-20 mt-5'/>
                <div className='flex flex-col items-start justify-center space-y-2'>
                    <h4 className='text-white font-light text-xl my-4'>Off-Chain Governance Process</h4>
                    <div className='flex flex-col items-start justify-center space-y-2'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-7 h-7 rounded-full bg-new-blue p-1 flex justify-center items-center'>1</div>
                        <p className='text-sm'>Proposal Discussion</p>
                      </div>
                      <img src="../../vertical_line.svg" alt="Line" className='xl:px-4 px-3'/>
                      <div className='flex items-center space-x-3'>
                        <div className='w-7 h-7 rounded-full bg-new-blue p-1 flex justify-center items-center'>2</div>
                        <p className='text-sm'>Snapshot Vote</p>
                      </div>
                      <img src="../../vertical_line.svg" alt="Line" className='xl:px-4 px-3'/>
                      <div className='flex items-center space-x-3'>

                        <div className='w-7 h-7 rounded-full bg-new-blue p-1 flex justify-center items-center'>3</div>
                        <p className='text-sm'>Sperax Improvement Plan</p>
                      </div>
                    </div>
                </div>
              </div>
              <div>
              </div>
            </div>
              <button className='w-3/4 mt-3 bg-new-blue rounded-full h-12 font-medium text-white hover:bg-cyan-700 hover:text-gray-300 hover:cursor-pointer flex items-center justify-center'>Learn more →</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default LandingScreenSix