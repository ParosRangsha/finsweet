import React from 'react'
import './footer.css'
import logo from '../../img/logo.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={logo} alt="logo" />
              <p>We are always open to discuss your project and improve your online presence.</p>
              <div className="contact">
                <Col lg={6}>
                  <h5>Email me at</h5>
                  <h6>contact@finsweet.com</h6>
                </Col>
                <Col lg={6}>
                  <h5>Call us</h5>
                  <h6>0927 6277 28525</h6>
                </Col>
              </div>
            </Col>
            <Col lg={6}>
              <h2>Lets Talk!</h2>
              <div className="icon">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footerNote">
        <Container>
          <Row>
            <Col lg={6}>
              <h6>Copyright 2024, Finsweet.com</h6>
            </Col>
            <Col lg={6}>
              <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </Col>

          </Row>
        </Container>
      </div>
    </>

  )
}

export default Footer