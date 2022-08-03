import React from 'react'
import HeroVideo from '../images/HERO.MP4'

function Video() {
  return (
    <video autoPlay controls>
        <source src={HeroVideo} type = "video/mp4" />
    </video>
  )
}

export default Video