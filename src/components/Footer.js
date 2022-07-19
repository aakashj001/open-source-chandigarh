import React from 'react'
import octocat from '../images/Octocat.png'
import docker from "../images/docker.webp"
import collabnix from "../images/Collabnix.png"
import apache from "../images/Apache.png"

function Footer() {
  return (
    <div className='w-full bg-neutral-800 text-white flex flex-col items-center px-10 md:px-24 py-12'>
        <font className = "text-4xl md:text-5xl mb-10 py-2 px-4 md:hover:px-8 transition-all border-b  tracking-[0.5rem] md:hover:tracking-[0.75rem] text-center">Our Technical Parteners</font>

        <div className='flex flex-row flex-wrap items-center justify-around mt-8'>
            <img src={octocat} alt="Git Logo" className='h-24 md:h-32 my-5 lg:my-0 md:mx-8'/>
            <img src={docker} alt="Git Logo" className='h-24 md:h-32 my-5 lg:my-0 md:mx-8'/>
            <img src={collabnix} alt="Git Logo" className='h-24 md:h-32 my-5 lg:my-0 md:mx-8'/>
            <img src={apache} alt="Git Logo" className='h-24 md:h-32 my-5 lg:my-0 md:mx-8'/>
        </div>
    </div>
  )
}

export default Footer