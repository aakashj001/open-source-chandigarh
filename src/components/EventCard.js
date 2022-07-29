import React from 'react'

function EventCard({date, title, organiser, link}) {
  return (
    <div className='w-[27em] h-64 my-4 shadow-md bpx-border px-4 py-2 flex flex-col justify-around hover:shadow-xl transition-all'>
        <font className = 'font-bold text-4xl pb-2 border-b-2'>
            {date ? date : "Date here"}
        </font>
        <font className = 'font-light text-3xl'>
            {title ? title : "Title here"}
        </font>
        <font className = 'font-normal text-xl mt-3 self-end underline underline-offset-4'>
            By: {organiser ? <a href={link} target = 'blank' className='text-red-600'>{' ' + organiser}</a> : "Organisers Here"}
        </font>
    </div>
  )
}

export default EventCard