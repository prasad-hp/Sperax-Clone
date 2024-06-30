import React from 'react'

function CardSrnFive(props) {
  return (
    <div className='rounded-3xl bg-new-cement bg-transparent text-white font-sans lg:w-76 min-h-96 mt-10 w-full'>
        <div className='lg:px-7 px-3 lg:py-10 py-2'>
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