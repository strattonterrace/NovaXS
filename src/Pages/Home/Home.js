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
import product from '../../Assets/Product/IMG_6844.png'




function Home() {
  return (
    <div className="Home">
       <div className="Home__Banner">
       <HomeVideo />
       </div>
       <Row className="Home__row__0" >  
        <h3 className="Home__h3__0">
          Live Better
          </h3>
          <p className="Home__p__0">
          Here you will find a list of popular breast pumps and insurance plans that we accept for all islands.
          <br/>
          <br/>
          Brought to you by Cal Med Hawaii.
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
         Here you will find a list of popular breast pumps and insurance plans that we accept for all islands.
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

        <div className="Home__middle__section">
        <img id = "Home_product" src={product} alt="icon"/>
        <h3 className="Home__h3__0">
        Spectra S1 Double Electric Breast Pump

          </h3>
          <p  className="Home__p__4">
          The Spectra S1 soft blue electric breast pump is designed to bring confidence and comfort to every moment of the breastfeeding journey. 
          The S1, which is portable and quickly rechargeable for active moms, is also quiet and discreet for soothing pumping and yet weighs only 2.9lbs. 
          With the quietest motor available for the S1Plus, which when in the “message mode” simulates the natural suckling of the baby. 
          Spectra Baby spent years developing features for the S1 Plus like “backflow protection” to keep your breast milk from harmful bacteria, mold, and viruses while pumping.


         </p>              
        </div>


        <Row className="Home__row__2" >
        <Col className="Home__R2__col1" xl="6">
        <h2 className="Home__h2__r2">Partnership You Can Trust</h2>
        <p  className="Home__p__1">
        The founders of CalMed Hawaii, Levy Bynum and her son David Scheidt, were born and raised on the Westside of Oahu. 
        In 1978, Levy’s son/ David’s younger brother, Darren, became paralyzed at 10 years of age causing the family to relocate to Southern California 
        for access to spinal specialists that were not available on island at that time. As Darren’s caretaker, 
        Levy educated herself on best practices with regard to providing quality care and understanding how medical supply options contribute to the patient’s quality of life. 
        In the late 1990s, Levy and Darren worked from a spare room in Levy’s Buena Park, CA 
        residence subcontracting to a small medical supply company providing disposable medical supplies to patients.
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