import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex justify-center pt-5'>
        <div className='flex w-8/12 justify-between'>
            <div className='flex space-x-4 items-center'>   
                <a href="/" className='hover:cursor-pointer'>
                    <img src="../../SperaxLogo.svg" alt="SperaxLogo" /> 
                </a>
                <a href="/" className='text-white hover:text-blue-400 hover:cursor-pointer text-base'>Spearx DAO</a>
                <a href="/" className='text-white hover:text-blue-400 hover:cursor-pointer text-sm'>Demeter</a>
                <a href="/" className='text-white hover:text-blue-400 hover:cursor-pointer text-sm'>Docs</a>
            </div>
            <div className='flex space-x-5 items-center justify-end'>
                <a href="">
                    <img src="../../discord.svg" alt="Discord Icon" className='hover:scale-110 transition duration-150'/>
                </a>
                <a href="">
                    <img src="../../telegram.svg" alt="Telegram Icon" className='hover:scale-110 transition duration-150'/>
                </a>
                <a href="">
                    <img src="../../twitter.svg" alt="Twitter Icon" className='hover:scale-110 transition duration-150'/>
                </a>
                <a href="">
                    <img src="../../subStack.svg" alt="Substack Icon" className='hover:scale-110 transition duration-150'/>
                </a>
                <button className="bg-cyan-500 text-white text-sm py-2 px-4 rounded hover:bg-cyan-600">Launch App</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar