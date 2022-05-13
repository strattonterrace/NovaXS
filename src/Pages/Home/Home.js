import React from 'react'
import { Row, Col } from 'reactstrap';
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
import './Home.css'
import bottle from '../../Assets/icons/bottle.png'
import icon from '../../Assets/icons/icon.png'
import users from '../../Assets/icons/users.png'
import partnerlogoone from '../../Assets/Partners/1.png'
import partnerlogotwo from '../../Assets/Partners/2.png'
import partnerlogothree from '../../Assets/Partners/3.png'
import partnerlogofour from '../../Assets/Partners/4.png'

function Home() {
  return (
    <div className="Home">
       <div className="Home__Banner">
       <HomeVideo />

       </div>
       <Row className="Home__row__0" >  
        <h3 className="Home__h3__0">
          A revolutionary advancement in biological administration
          </h3>
          <p className="Home__p__0">
          A smart drug delivery platform that administers a narrow stream of medication without a needle in 0.3 seconds and analyzes your injection data to help you make smarter health decisions.
          <br/>
          <br/>
          Brought to you by NovaXS Biotech.
          </p>
          <a href='/' target='_blank'>          
          <button id='Home__row1__button'>
          Learn More</button>
              </a>
       </Row>
<Row className="Home__row" >
            <Col className="Home__R1__col1" xl="4">
         <div className="Home__col__wrapper">
         <img id = "Home_icon" src={bottle} alt="bottle"/>
         <h3 className="Home__h3">Accessibility</h3>
         <p  className="Home__p__0">
         Needle-free subcutaneous and intramuscular injection
         </p>
         </div>
        </Col>

        <Col className="Home__R1__col1" xl="4">
        <div className="Home__col__wrapper">
        <img id = "Home_icon" src={icon} alt="icon"/>
          </div>
          <h3 className="Home__h3">Efficacy</h3>
          <p  className="Home__p__0">
          Injection site detection & electroporation technology
         </p>
          </Col>

          <Col className="Home__R1__col1" xl="4">
          <div className="Home__col__wrapper">
          <img id = "Home_icon" src={users} alt="users"/>
          <h3 className="Home__h3">Adherence</h3>
          <p  className="Home__p__0">
          Real-time injection data collection & treatment reminder
         </p>
         </div>
       </Col>
        </Row>
        <Row className="Home__row__1" >  
        <a href='/' target='_blank'>          
          <button id='Home__row1__button'>
          Speak with an Expert</button>
              </a>
        </Row>
        
        <Row className="Home__row__2" >

        <Col className="Home__R2__col1" xl="6">
        <h2 className="Home__h2__r2">Partnership You Can Trust</h2>
        <p  className="Home__p__1">
        At NovaXS Biotech, we are committed to bringing your vaccine to the world through a system that’s fast, safe, and easy-to-use. 
        Our products hold WHO PQS certification and CE Mark for intradermal, intramuscular, and subcutaneous use. 
        We believe that vaccines should be available to all, safe for everyone, and effective in the global fight against disease.
         </p>
         <h3 className="Home__h3__2">Here are just a few of our 20+ valued partners</h3>
         <Row className="Home__row__3" >
         <img className="Home__partner_logo" src={partnerlogoone} alt="users"/>
         <img className="Home__partner_logo" src={partnerlogotwo} alt="users"/>
         </Row>
         <Row className="Home__row__3" >
         <img className="Home__partner_logo" src={partnerlogothree} alt="users"/>
         <img className="Home__partner_logo" src={partnerlogofour} alt="users"/>
         </Row>
        </Col>



        <Col className="Home__R2__col2" xl="6">
        <h3 className="Home__R2__h3">Becoming a partner is simple.</h3>
        <p  className="Home__p__1">
        <strong>1. Discover What’s Possible</strong><br/>
        We’ll get to know you, your science, and the challenges you’re facing to advance your pipeline. 
        If we find a good fit, we’ll put you on a proven pathway to get started quickly
         </p>
         <p  className="Home__p__1">
         <strong>2. Customize Our Collaboration</strong><br/>
         We’ll work with you to create a customized plan to support everything from preclinical to clinical validation. 
         We’ll share our experience and relevant data from 100 development programs so we can map out an efficient timeline.
         </p>
         <p  className="Home__p__1">
         <strong>3. Receive Expert Support</strong><br/>
         Our clinical experts will share our best-practice approaches tailored to your specific program. 
         From pre-clinical through clinical study design, we’ll deliver technical support, product training, and guidance on regulatory compliance.
         </p>
         <p  className="Home__p__1">
         <strong>4. Advance Efficiently to Launch</strong><br/>
         Once our collaboration has created successful initial testing, we’ll collaborate on a customized and mutually beneficial commercialization 
         agreement to help you complete your studies, submit regulatory authorities, and launch with confidence.
         </p>
          </Col>
        </Row>
      </div>

    

    
  )
}

export default Home