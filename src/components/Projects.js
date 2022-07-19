import React from 'react'
import ProjCards from './ProjCards'

function Projects() {
  return (
    <div className='container m-auto md:my-10 px-16 py-8 shadow-2xl flex flex-row flex-wrap justify-around'>
        <ProjCards />
        <ProjCards />
        <ProjCards />
    </div>
  )
}

export default Projects