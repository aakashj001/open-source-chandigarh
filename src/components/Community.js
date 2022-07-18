import React from 'react'
import ComCard from './ComCard'
import projects from '../images/projects.png'
import collaborators from "../images/collaborators.png"
import workshop from '../images/workshops.png'

function Community() {
  return (
    <div className='container m-auto flex flex-col mt-10 items-center justify-center border-b pb-8 md:pb-16'>
        <div className='font-thin text-2xl md:text-4xl text-center border-b pb-2 px-4 border-b-black'>
            Our Community
        </div>
        <div className = "flex w-full h-auto justify-between flex-col md:flex-row mt-10">
            <ComCard title={'Projects'} number = {'100+'} imgSrc = {projects}/>
            <ComCard title={"Collaborators"} number = {'100+'} imgSrc = {collaborators}/>
            <ComCard title={"Workshops"} number = {'50+'} imgSrc = {workshop}/>
        </div>
    </div>
  )
}

export default Community