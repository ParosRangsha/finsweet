import React from 'react'
import './about.css'
import { Container, Row, Col } from 'react-bootstrap'
import Benefitbox from '../../reuse/Benefitbox'
import aboutban from '../../img/aboutBanner.png'
import goal from '../../img/aboutgoal.png'
import bar from '../../img/processbar.png'
import mOne from '../../img/mission1.png'
import mTwo from '../../img/mission2.png'
import biconOne from '../../img/benefiticon1.png'
import biconTwo from '../../img/benefiticon2.png'
import biconThree from '../../img/benefiticon3.png'
import support from '../../img/support.png'

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
    <div className="aboutmission">
      <Container>
        <Row>
          <Col lg={6} className='txt'>
            <p>Our mission</p>
            <h3>Inspire, Innovate, Share</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
          <Col lg={{span:5, offset:1}}>
            <div className="thumb">
              <img src={mOne} alt="mission photo" />
            </div>
          </Col>
        </Row>
          <br/><br/><br/>
        <Row>
          <Col lg={5}>
            <div className="thumb">
              <img src={mTwo} alt="mission photo" />
            </div>
          </Col>
          <Col lg={{span:6, offset:1}} className='txt'>
            <p>Our mission</p>
            <h3>Laser focus</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="aboutbenefit">
      <Container>
        <Row>
          <h2>The benefits of working with us</h2>
        </Row>
        <Row>
          <Benefitbox img={biconOne} heading="Customize with ease" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
          <Benefitbox img={biconTwo} heading="Perfectly Responsive" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
          <Benefitbox img={biconThree} heading="Friendly Support" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
        </Row>
        <Row>
          <img src={support} alt="support" id='support'/>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default About