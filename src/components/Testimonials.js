import React from 'react'
import TestCards from './TestCards'

function Testimonials() {
  return (
    <div className='container mt-10 m-auto flex flex-col items-center justify-center'>
        <font className = 'font-thin text-2xl md:text-4xl border-b pb-2 px-4 border-b-black'>
            Testimonials
        </font>
        <div className='flex flex-col lg:flex-row md:items-center my-10 justify-between w-full'>
            <TestCards name={"Ajeet Singh Raina"} designation = {"Docker"} testimonial={"“This is a great effort taken by Chitkara University towards open-source community establishment in Chandigarh. Docker is proud to be a partner with Chitkara University. From estimating to project management and all the way to the field, Chitkara University understands that success depends on trusted relationships and teamwork.”"}/>
            <TestCards transform = {true} name = {"Dhiraj Gyani"} designation = {'GitHub'} testimonial={"“This wonderful initiative by Chitkara University will help in promoting open-source resulting in more number of enthusiastic geeks participating industriously. You will have a great community built around your project that will trust your project. If someone encounters a problem in an open-source project, one can look at the source code and better understand the cause of the problem. This will help resolve the bug more quickly making it a win-win situation for you, as the developer and the user.”"}/>
            <TestCards name={"Swapnil Mane"} designation = {"Apache Local Community"} testimonial={"“Contributing to open-source is something of significant importance in portfolio. It is a great starting point that will help students later on. It gives not only the beginners but also advanced developers something to work on and learn from contributing. The partnership with Chitkara University has been working well in that they are very open minded, very collaborative and they share their experience good or bad. It’s been a two-way partnership.”"}/>
        </div>
    </div>
  )
}

export default Testimonials