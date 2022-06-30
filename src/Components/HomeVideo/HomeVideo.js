import React from 'react'
import './HomeVideo.css'
import Typewriter from 'typewriter-effect'
import homeBackground from '../../Assets/videos/bg-home1.jpg'

const HomeVideo = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <img src={homeBackground} />
        <div className="content">
        <h1 className="Content__Home__h1">Enabling Greater <br/>Access To
            <span className="emphasis-1"> Life Improving <br/>  Solutions</span> 
          </h1>
        <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: #FAFAFA;"></span>')
            .pauseFor(500)
            .deleteAll()
            .typeString('<span style="color: #FAFAFA;"> Cal Med Hawaii</span>')
            .start()
        }}
      />
        </div>
        
    </div>
  )
}

export default HomeVideo