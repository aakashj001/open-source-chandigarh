import React from 'react'

function TestCards({transform, name, designation}) {
  return (
    <div className={`lg:flex-[0.3_0_0%] rounded my-5 mx-10 lg:mx-0 bg-neutral-800 hover:scale-[1.02] transition ${transform ? 'lg:h-80 h-64' : 'h-64'} text-white px-8 py-4 flex flex-col justify-between`}>
        <font className = 'text-md font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, harum aspernatur quibusdam facere magni adipisci eum, minima ipsa, doloremque reprehenderit laudantium nam. Reiciendis maxime esse accusantium. Harum aliquam ex quod?
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