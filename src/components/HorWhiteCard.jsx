import React from 'react'

function HorWhiteCard(props) {
  return (
    <div className='bg-white rounded-3xl w-full flex justify-between items-center h-56 pl-4 pr-20 mt-10'>
        <div className='p-5'>
            <h2 className='text-2xl font-medium'>{props.heading}</h2>
            <p className='font-thin'>{props.desc}</p>
        </div>
        <img src={props.imgLoc} alt="Screenshots" className='max-h-40 w-80'/>
    </div>
  )
}

export default HorWhiteCard