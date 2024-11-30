import React from 'react'
import './faq.css'
import { Col, Container, Row } from 'react-bootstrap'
import blogban from '../../img/blogban.png'

const Faq = () => {
  return (
    <>
      <div className="faq">
        <Container>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
              <p id='subhead'><b>Andrew Jonson</b>, Posted on 27th January 2021</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={blogban} alt="blog Banner" />
            </Col>
          </Row>
          <Row>
              <Col lg={{span:8, offset:2}}>
              <p id='blogpara'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
              </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq