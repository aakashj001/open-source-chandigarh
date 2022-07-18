import React from 'react'
import TestCards from './TestCards'

function Testimonials() {
  return (
    <div className='container m-auto flex flex-col items-center justify-center'>
        <font className = 'font-thin text-3xl border-b pb-2 px-4 border-b-black'>
            Testimonials
        </font>
        <div className='flex flex-col lg:flex-row md:items-center my-10 justify-between w-full'>
            <TestCards name={"Abhay Aggarwal"} designation = {"Front-end developer"}/>
            <TestCards transform = {true} name = {"Aakash Jha"} designation = {'Back-end developer'}/>
            <TestCards name={"Dr. Monit Kapoor"} designation = {"Dean CSE - Beta Cluster"}/>
        </div>
    </div>
  )
}

export default Testimonials