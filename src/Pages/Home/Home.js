import React from 'react'
import { Row, Col } from 'reactstrap';
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
import './Home.css'
import bottle from '../../Assets/icons/bottle.png'
import icon from '../../Assets/icons/icon.png'
import users from '../../Assets/icons/users.png'

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
         <h2 className="Home__h2">Accessibility</h2>
         <p  className="Home__p__0">
         Needle-free subcutaneous and intramuscular injection
         </p>
         </div>
        </Col>

        <Col className="Home__R1__col1" xl="4">
        <div className="Home__col__wrapper">
        <img id = "Home_icon" src={icon} alt="icon"/>
          </div>
          <h2 className="Home__h2">Efficacy</h2>
          <p  className="Home__p__0">
          Injection site detection & electroporation technology
         </p>
          </Col>

          <Col className="Home__R1__col1" xl="4">
          <div className="Home__col__wrapper">
          <img id = "Home_icon" src={users} alt="users"/>
          <h2 className="Home__h2">Adherence</h2>
          <p  className="Home__p__0">
          Real-time injection data collection & treatment reminder
         </p>
         </div>
       </Col>
        </Row>
        <Row className="Home__row__2" >  
        <a href='/' target='_blank'>          
          <button id='Home__row1__button'>
          Speak with an Expert</button>
              </a>
        </Row>
        <div className="About">

<Row className="About__row" >
    <Col>
  <h1 className="About__h1">
  Becoming a partner is simple.
  </h1>
  <p className="About__p">
  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
  </p>

  <Col id="About__R2__col1" xl="6">
  <div>
       <h3 className="About__h3">
    Discover What’s Possible</h3>
      <p id="About__p__1"> 
      We’ll get to know you, your science, and the challenges you’re facing to advance your pipeline. If we find a good fit, 
      we’ll put you on a proven pathway to get started quickly.</p><br/>
        </div>
        <h3 className="About__h3">
        Customize Our Collaboration</h3>
      <p id="About__p__1"> 
      We’ll work with you to create a customized plan to support everything from preclinical to clinical validation. 
      We’ll share our experience and relevant data from 100 development programs so we can map out an efficient timeline.</p>     
  </Col>
 
  <Col id="About__R2__col1" xl="6">
  <div>
    <h3 className="About__h3">
    Receive Expert Support</h3>
      <p id="About__p__1"> 
      Our clinical experts will share our best-practice approaches tailored to your specific program. 
      From pre-clinical through clinical study design, we’ll deliver technical support, product training, and guidance on regulatory compliance.</p>
        </div>
        <h3 className="About__h3">
        Advance Efficiently to Launch</h3>
      <p id="About__p__1"> 
      Our clinical experts will share our best-practice approaches tailored to your specific program. From pre-clinical through clinical
       study design, we’ll deliver technical support, product training, and guidance on regulatory compliance..</p>     
  </Col>
 
  </Col>
  <Col id="About__R1__col1" xl="4">
<h1 className="About__h1__2">
Partnership You Can Trust
  </h1>
  <p className="About__p__2">
  At NovaXS Biotech, we are committed to bringing your vaccine to the world through a system that’s fast, safe, and easy-to-use. 
  Our products hold WHO PQS certification and CE Mark for intradermal, intramuscular, and subcutaneous use. 
  We believe that vaccines should be available to all, safe for everyone, and effective in the global fight against disease.
  </p>
  </Col>
  </Row>

</div>
      </div>

    

    
  )
}

export default Home