import React from 'react'
import './HomeVideo.css'
import Typewriter from 'typewriter-effect'
import videoBg from '../../Assets/videos/videoBg1.mp4'

const HomeVideo = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted type='video/mp4' />
        <div className="content">
        <h1 className="Content__Home__h1">Enabling Greater <br/>Access To
            <span className="emphasis-1"> Life Improving  Pharmaceuticals</span> 
          </h1>
        <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: #FAFAFA;"></span>')
            .pauseFor(500)
            .deleteAll()
            .typeString('<span style="color: #FAFAFA;"> NovaXs Biotech </span>')
            .start()
        }}
      />
        </div>
        
    </div>
  )
}

export default HomeVideo