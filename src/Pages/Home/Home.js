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
         </div>
        </Col>

        <Col className="Home__R1__col1" xl="4">
        <div className="Home__col__wrapper">
        <img id = "Home_icon" src={icon} alt="icon"/>
          </div>
          </Col>

          <Col className="Home__R1__col1" xl="4">
          <div className="Home__col__wrapper">
          <img id = "Home_icon" src={users} alt="users"/>
         </div>
       </Col>

    
        </Row>

      </div>

    

    
  )
}

export default Home