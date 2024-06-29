import React from 'react'

function HorWhiteCard(props) {
  return (
    <div className='bg-white rounded-3xl w-full flex lg:flex-row flex-col lg:justify-between justify-start items-center lg:h-56 lg:pl-4 lg:pr-20 px-5 mt-10 lg:py-0 py-2'>
        <div className='p-5'>
            <h2 className='text-2xl font-medium'>{props.heading}</h2>
            <p className='font-thin'>{props.desc}</p>
        </div>
        <img src={props.imgLoc} alt="Screenshots" className='max-h-40 w-80'/>
    </div>
  )
}

export default HorWhiteCard