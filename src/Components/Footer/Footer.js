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
                      <li><a href="mailto:info@novaxs.co" target="_blank" rel="noopener noreferrer" >info@novaxs.co</a></li>
                      <li><a href="facetime:19493837619" target="_blank" rel="noopener noreferrer" >(949) 383-7619</a></li>
                      <li><a href="https://goo.gl/maps/oVgYYD13gh37Uavh7" target="_blank" rel="noopener noreferrer" >8 Panorama Trabuco Canyon, CA</a></li>
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
                  <h3>NovaXS Biotech</h3>
                  <p>
                  NovaXS is a therapeutic startup focused on improving treatment efficacy through an advanced drug delivery platform and innovative CRISPR gene therapy nanoparticle delivery. 
                  </p>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/Nova-XS-Biotech-260711482451882/" target="_blank" rel="noopener noreferrer" >  <i className="fab fa-facebook-f "></i></a>
                <a href="https://www.linkedin.com/company/novaxs-biotech-corp/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin "></i></a>
                <a href="mailto:info@novaxs.co" target="_blank" rel="noopener noreferrer" ><i className="fa fa-envelope " ></i></a>
                <a href="https://goo.gl/maps/kbgx1STFFrQ5FTzh7" target="_blank" rel="noopener noreferrer" ><i className="fab fa-google "></i></a>
                </div>
          </div>
          <p className="copyright">NovaXS Biotech LLC © 2022</p>
      </div>
  </footer>
</div>
  );

export default Footer
