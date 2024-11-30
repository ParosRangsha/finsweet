import React from 'react'
import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import MyBtn from '../../reuse/MyBtn'

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col lg={{span:6, offset:3}}>
            <h2>Contact Us</h2>
          </Col>
          <Col lg={{span:6, offset:3}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </Col>
        </Row>
        <Row className='myItem'>
          <Col lg={{span:8, offset:2}}>
            <form action="post">
              <Row>
                <Col lg={6}>
                  <label htmlFor="inpName">Name</label>
                  <input type="text" placeholder='Enter your name' id='inpName'/>
                </Col>
                <Col lg={6}>
                  <label htmlFor="inpEmail">Name</label>
                  <input type="mail" placeholder='Enter your name' id='inpEmail'/>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row className='myItem'>
          <Col lg={{span:8, offset:2}}>
            <form action="post">
              <Row>
                <Col lg={6}>
                  <label htmlFor="inpContext">Name</label>
                  <input type="text" placeholder='Provide context' id='inpContext'/>
                </Col>
                <Col lg={6}>
                  <label htmlFor="inpSubject">Name</label>
                  <input type="text" placeholder='Provide context' id='inpSubject'/>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row>
          <Col lg={{span:8, offset:2}}>
            <lablel htmlFor="myMessage">Message</lablel>
            <textarea placeholder='Write your question here.'></textarea>
          </Col>
        </Row>
        <Row>
          <Col lg={{span:8, offset:2}}>
            <MyBtn link="/message" caption="Send Message"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact