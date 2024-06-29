import React from 'react'

function CardSrnFive(props) {
  return (
    <div className='rounded-3xl bg-gray-500 text-white font-sans min-w-80 h-96 mt-10'>
        <div className='px-7 py-10'>
            <img src={props.icon} alt={props.alt} className='h-20'/>
            <h1 className='text-2xl font-medium pt-6'>{props.heading}</h1>
            <h3 className='font-light'>{props.desc}</h3>
            <div className='pt-10 pb-4'>
                <h3 className='font-light'>{props.desc2}</h3>
                <h2 className='text-xl'>{props.end}</h2>
            </div>
        </div>
    </div>
  )
}

export default CardSrnFive