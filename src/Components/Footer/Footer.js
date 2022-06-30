import React from 'react'
import './Footer.css'


const Footer = () => (
  <div className="footer-dark">
  <footer>
      <div className="container">
          <div className="row">


          <div className="col-sm-6 col-md-3 item">
                  <h3>Contact Info</h3>
                  <ul>
                      <li><a href="mailto:jdresel@calmedhawaii.com" target="_blank" rel="noopener noreferrer" >jdresel@calmedhawaii.com</a></li>
                      <li><a href="facetime:8086919973" target="_blank" rel="noopener noreferrer" >(808) 691-9973 </a></li>
                      <li><a href="https://goo.gl/maps/2umcZiXxK49MiDqp9" target="_blank" rel="noopener noreferrer" >3049 Ualena Street Unit 101, First Floor Honolulu, HI 96819-1942 </a></li>
                  </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                  <h3>LEGAL INFORMATION</h3>
                  <ul> 
                      <li><a href="/">DMCA Policy</a></li>
                      <li><a href="/">Terms and Conditions</a></li>
                      <li><a href="/">Privacy Policy</a></li>

                  </ul>
              </div>
          
              <div className="col-md-6 item text">
                  <h3>Cal Med Hawaii</h3>
                  <p>
                  Cal Med Hawaii is a proud provider of medical supplies to the local people of Hawaii. CalMed Hawaii is dedicated to providing orthopedic, pulmonary, 
                  mobility and women’s health products for over 20 years. We are a network provider for a majority of Hawaii’s health insurance companies.
                  </p>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/CalMed-Hawaii-277028104107983/" target="_blank" rel="noopener noreferrer" >  <i className="fab fa-facebook-f "></i></a>
                <a href="https://twitter.com/calmedhawaii" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter "></i></a>
                <a href="https://www.instagram.com/accounts/login/?next=/calmedhawaii/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram " ></i></a>
                <a href="https://www.pinterest.com/Calmedhawaii/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-pinterest "></i></a>
                </div>
          </div>
          <p className="copyright">Cal Med Hawaii LLC © 2022</p>
      </div>
  </footer>
</div>
  );

export default Footer
