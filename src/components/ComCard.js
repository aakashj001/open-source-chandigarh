import React from 'react'

function ComCard({title, number, imgSrc}) {
  return (
    <div className='my-5 md:flex-[0.3_0_0%] h-56 rounded bg-white shadow-lg hover:shadow-xl transition flex flex-col justify-center items-center mx-10 md:mx-0'>
        <img src={imgSrc} alt="Community Headings"  className='h-24 mb-2'/>
        <font className = 'font-light text-4xl text-gray-500'>{number}</font>
        <font className = 'font-light text-xl'>{title}</font>
    </div>
  )
}

export default ComCard