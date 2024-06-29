import React from 'react'

function Article(props) {
  return (
    <a className='w-full flex flex-col items-start ' href=''>
        <img src={props.img} alt="Ariticle" className='rounded-md w-full h-40'/>
        <h3 className='text-white font-medium text-base'>{props.heading}</h3>
        <p className='text-cyan-800 font-light text-sm'>{props.date}</p>
    </a>
  )
}

export default Article