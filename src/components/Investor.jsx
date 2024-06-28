import React from 'react'

function Investor() {
  return (
    <div className='w-full h-full'>
        <div className='bg-white flex flex-col items-center justify-center h-40 mt-4'>
            <h2 className='text-gray-500 text-sm'>Backed By</h2>
            <div className='flex justify-between space-x-10 items-center'>
                <img src="../../polychain.svg" alt="Polychain capital" className='w-44'/>
                <img src="../../jumptrading.png" alt="Jumptrading" className='w-44'/>
                <img src="../../amber.svg" alt="Amber Icon" className='w-44'/>
                <img src="../../outlier.svg" alt="Outlier Icon" className='w-44'/>
                <img src="../../steve.svg" alt="Steve Icon" className='w-44'/>
            </div>
        </div>
    </div>
  )
}

export default Investor;