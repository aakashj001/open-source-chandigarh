import React from 'react'

function TestCards({transform, name, designation,testimonial}) {
  return (
    <div className={`lg:flex-[0.3_0_0%] rounded my-5 mx-10 lg:mx-0 bg-neutral-800 hover:scale-[1.02] transition ${transform ? 'h-auto lg:h-[20rem] md:h-64' : 'h-auto md:h-72'} text-white px-8 py-4 flex flex-col justify-between`}>
        <font className = 'text-[0.85rem] font-light'>
            {testimonial}
        </font>
        <div className='flex flex-row justify-between items-center mt-5'>
            <div className='font-semibold flex-1 flex flex-col'>
                <font className = 'text-2xl'>{name}</font>
                <font className = 'font-thin'>{designation}</font>
            </div>
        </div>
    </div>
  )
}

export default TestCards