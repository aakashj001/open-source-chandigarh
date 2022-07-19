import React from 'react'

function EventCard({date, title}) {
  return (
    <div className='w-[26em] h-48 my-4 shadow-md bpx-border px-4 py-2 flex flex-col justify-around hover:shadow-xl transition-all'>
        <font className = 'font-bold text-4xl pb-2 border-b-2'>
            {date ? date : "Date here"}
        </font>
        <font className = 'font-light text-2xl mt-5'>
            {title ? title : "Title here"}
        </font>
    </div>
  )
}

export default EventCard