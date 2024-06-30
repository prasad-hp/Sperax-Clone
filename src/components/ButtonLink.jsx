import React from 'react'

function ButtonLink(props) {
  return (
    <div className='col-span-1 w-full'>
      <a href={props.link} className='col-span-1'>
        <button className="bg-transparent flex space-x-1 items-center justify-around text-white text-sm py-2 px-4 rounded-full border-white h-12 border w-full">
          <img src={props.img1} alt="Image" />
          <p>{props.name}</p>
          <img src={props.img2} alt="Image" />
        </button>
      </a>
    </div>
  )
}

export default ButtonLink