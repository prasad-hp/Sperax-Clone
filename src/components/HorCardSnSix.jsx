import React from 'react'

function HorCardSnSix(props) {
  return (
    <div className='rounded-3xl bg-new-cement text-left px-5 py-6 lg:h-60 w-full text-white bg-[url("../../cube_corner.svg")]'>
        <img src={props.image} alt={props.alt} />
        <h1 className='text-2xl font-medium py-1'>{props.heading}</h1>
        <h3 className='text-sm font-light'>{props.desc}</h3>
        <div className='flex justify-start items-center hover:cursor-pointer'>
            <h2 className='text-new-blue underline hover:no-underline'>{props.link}</h2>
            <img src="../../arrow-up-right.svg" alt="Arrow" />
        </div>
    </div>
  )
}

export default HorCardSnSix