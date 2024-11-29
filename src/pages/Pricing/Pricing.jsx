import React from 'react'
import './pricing.css'
import { Col, Container, Row } from 'react-bootstrap'
import MyBtn from '../../reuse/MyBtn'


const Pricing = () => {
  return (
    <div className="pricing">
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Our Pricing Plans</h2>
          </Col>
          <Col lg={{span:6, offset:3}}>
            <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="box">
              <h6><span>$299</span>Per Design</h6>
              <h4>Landing Page </h4>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
              <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
              </ul>
              <MyBtn link="/pricing" caption="Get Start"/>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box">
              <h6><span>$399</span>Per Design</h6>
              <h4>Website Page</h4>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
              <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
              </ul>
              <MyBtn link="/pricing" caption="Get Start"/>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box">
              <h6><span>$499</span>Per Design</h6>
              <h4>Complex Project</h4>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
              <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
              </ul>
              <MyBtn link="/pricing" caption="Get Start"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pricing