import React from 'react'

function SquareCard(props) {
  return (
    <div className='bg-gray-600 rounded-3xl text-white p-10 w-1/2'>
        <h1 className='text-4xl font-semibold'>{props.heading}</h1>
        <h3 className='font-light text-lg py-5'>{props.description}</h3>
        <div className='flex items-center space-x-8 py-3'>
            <a href="" className='flex items-center space-x-1'>
                <p>{props.link1}</p>
                <img src="../../uparrow.svg" alt="Up Arrow" />
            </a>
            <a href="" className='flex items-center space-x-1'>
                <p>{props.link2}</p>
                <img src="../../uparrow.svg" alt="Up Arrow" />
            </a>
        </div>
        <div className='flex justify-between items-center w-full -space-x-44'>
            <img src={props.image1} alt="Mint Image" className='relative bottom-0 w-10/12'/>
            <img src={props.image2} alt="Image" className='z-10 w-1/3'/>
        </div>
    </div>
  )
}

export default SquareCard