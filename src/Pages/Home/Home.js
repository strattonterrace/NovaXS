import React from 'react'
import { Row, Col } from 'reactstrap';
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
// import Test from '../../Components/Test/test'
import permanent from '../../Assets/Images/Alina.png'
import './Home.css'


function Home() {
  return (
    <div className="Home">
       <div className="Home__Banner">
       <HomeVideo />
{/* <Test /> */}
       </div>

<Row className="Home__row" >
            <Col>
          <h3 className="Home__h3">
          A revolutionary advancement in biological administration
          </h3>
          <p className="Home__p">
          A smart drug delivery platform that administers a narrow stream of medication without a needle in 0.3 seconds and analyzes your injection data to help you make smarter health decisions.
          <br/>
          <br/>
          Brought to you by NovaXS Biotech.
          </p>
          <a href='/Pricing/#Pricing__anchor__tag' target='_blank'>          
          <button id='Home__row1__button'>
          Learn More</button>
              </a>
        </Col>
        <Col id="Home__R1__col1" xl="4">
         <img id = "Home_img__body" src={permanent} alt="Digital Advertising"/>
          </Col>
        </Row>

      </div>

    

    
  )
}

export default Home