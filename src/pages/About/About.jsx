import React from 'react'
import './about.css'
import { Container, Row, Col } from 'react-bootstrap'
import aboutban from '../../img/aboutBanner.png'
import goal from '../../img/aboutgoal.png'
import bar from '../../img/processbar.png'

const About = () => {
  return (
    <>
    <div className="aboutbanner">
      <Container>
        <Row>
          <Col lg={5} className='bantext'>
            <h6>About us</h6>
            <h2>Our designs solve problems</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </Col>
          <Col lg={{span:5, offset:2}} className='banpic'>
            <img src={aboutban} alt="aboutbanner" />
          </Col>
        </Row>
      </Container>
    </div>
    <div className="aboutprocess">
      <Container>
        <Row className='processdetails'>
          <Col lg={12}>
          <p className='subhead'>Who we are</p>
          </Col>
          <Col lg={6} className='headingtxt'>
            <h3>Goal focussed</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
          <Col lg={6} className='headingtxt'>
            <h3>Continuous improvement</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
        <Row>
          <img src={goal} alt="Goal" className='processthumb' />
        </Row>
        <Row>
          <Col lg={12} className='wefollow'>
            <h2>The process we follow</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={3} className='followitem'>
              <img src={bar} alt="bar" />
              <h4>Planning</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </Col>
          <Col lg={3} className='followitem'>
              <img src={bar} alt="bar" />
              <h4>Conception</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </Col>
          <Col lg={3} className='followitem'>
              <img src={bar} alt="bar" />
              <h4>Design</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </Col>
          <Col lg={3} className='followitem'>
              <img src={bar} alt="bar" />
              <h4>Development</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="mission">
      <Container>
        <Row>
          
        </Row>
      </Container>
    </div>
    </>
  )
}

export default About