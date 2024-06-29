import React from 'react'

function LinkCard(props) {
  return (
    <div className={`rounded-3xl w-56 h-28 ${props.bg} ${props.hoverBg} flex items-center justify-between p-5 cursor-pointer`}>
        <div className='flex justify-start items-center space-x-5 w-4/5'>
            <img src={props.icon} alt={props.name} className='h-6'/>
            <p className='text-white text-2xl font-semibold'>{props.count}</p>
        </div>
        <div className='w-1/5 flex justify-end items-start h-full'>
            <img src="../../uparrow.svg" alt="Arrow" className='h-8'/>
        </div>
    </div>
  )
}

export default LinkCard