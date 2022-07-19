import React from 'react'
import {Card,Carousel} from './Carousel.js'

function Partners() {
  return (
    <div className=' flex flex-col items-center justify-center p-5'>
        <font className = "text-2xl md:text-4xl text-slate-600 mb-10 py-2 px-4 md:hover:px-8 transition-all border-b  tracking-[0.5rem] md:hover:tracking-[0.75rem] text-center">Our Technical Parteners</font>

        <Carousel>
        {[...new Array(10)].map((_, i) => (
        <Card title={'Github ' } content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
      ))}
        </Carousel>
    </div>
  )
}

export default Partners