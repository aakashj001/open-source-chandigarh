import React from 'react'

function TestCards({transform, name, designation,testimonial}) {
  return (
    <div className={`lg:flex-[0.3_0_0%] rounded-lg my-5 mx-10 lg:mx-0 bg-black hover:scale-[1.02] transition ${transform ? 'h-auto lg:h-[33rem]' : 'h-auto lg:h-[30rem]'} text-white px-8 py-4 flex flex-col justify-around`}>
        <div className='flex flex-row justify-between items-center mt-5 border-b mb-4'>
            <div className='font-semibold flex-1 flex flex-col'>
                <font className = 'text-xl md:text-2xl'>{name}</font>
                <font className = 'font-thin text-base xl:text-xl'>{designation}</font>
            </div>
        </div>
        <font className = 'text-base xl:text-[1.15rem] font-light text-justify'>
            {testimonial}
        </font>
    </div>
  )
}

export default TestCards