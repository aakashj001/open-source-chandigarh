import React from 'react'
import ComCard from './ComCard'

function Community() {
  return (
    <div className='container m-auto flex flex-col mt-10 items-center justify-center'>
        <div className='font-light text-3xl text-center border-b-2 pb-2 px-4 border-b-black'>
            Our Community
        </div>
        <div className = "flex w-full h-auto justify-between flex-col md:flex-row mt-10">
            <ComCard title={'Projects'} number = {'100+'}/>
            <ComCard title={"Collaborators"} number = {'100+'}/>
            <ComCard title={"Workshops"} number = {'50+'}/>
        </div>
    </div>
  )
}

export default Community