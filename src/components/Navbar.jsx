import React from 'react'

function Navbar() {
  return (
    <div className='w-full pt-5'>
        <div className='flex justify-between'>
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
                    <img src="../../discord.svg" alt="Discord Icon" />
                </a>
                <a href="">
                    <img src="../../telegram.svg" alt="Telegram Icon" />
                </a>
                <a href="">
                    <img src="../../twitter.svg" alt="Twitter Icon" />
                </a>
                <a href="">
                    <img src="../../subStack.svg" alt="Substack Icon" />
                </a>
                <button className='rounded-full bg-blue-400 text-white h-12 w-36 text-sm hover:cursor-pointer hover:bg-blue-500 hover:text-gray-50'>Launch App</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar