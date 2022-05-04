import React from 'react'
import './Footer.css'


const Footer = () => (
  <div className="footer-dark">
  <footer>
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-3 item">
                  <h3>Pipeline</h3>
                  <ul> 
                      <li><a href="/pipeline/#telosis__anchor__tag">TELOSIS</a></li>
                      <li><a href="/pipeline/#timeline__anchor__tag">TIMELINE</a></li>
                  </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                  <h3>Contact Info</h3>
                  <ul>
                      <li><a href="mailto:novaxs@gmail.com" target="_blank" rel="noreferrer">novaxs@gmail.com</a></li>
                      <li><a href="facetime:18001231234" target="_blank" rel="noreferrer" >(800) 111-1234‬</a></li>
                      <li><a href="https://goo.gl/maps/ZDiZ9GXHWGkwPCwQ8" target="_blank" rel="noreferrer" >1234 address <br/> LosAngeles, CA 90210</a></li>
                  </ul>
              </div>
              <div className="col-md-6 item text">
                  <h3>NovaXs biotech</h3>
                  <p>
                  NovaXS is a therapeutic startup focused on improving treatment efficacy through advanced drug delivery platform and innovative CRISPR gene therapy on Duchenne Muscular Dystrophy
                  </p>
              </div>
              <div className="col item social">
                <a href="https://www.linkedin.com/company/novaxs-biotech-corp/" target="_blank" rel="noreferrer" >  <i className="fab fa-linkedin-in icon"></i></a>
                <a href="mailto:novaxs@gmail.com" target="_blank" rel="noreferrer" ><i className="fa fa-envelope icon" ></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" ><i className="fab fa-instagram icon"></i></a>
                <a href="https://goo.gl/maps/ZDiZ9GXHWGkwPCwQ8" target="_blank" rel="noreferrer" ><i className="fab fa-google icon"></i></a>
                </div>
          </div>
          <p className="copyright">NovaXs biotech© 2022</p>
      </div>
  </footer>
</div>
  );

export default Footer
