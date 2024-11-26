import React from 'react'
import './banner.css'
import homeBannerThumb from '../../img/homebannerthumb.png'
import { Col, Container, Row } from 'react-bootstrap'
import MyBtn from '../../reuse/MyBtn'

const Banner = () => {
  return (
    <div className="banner">
        <Container>
            <Row>
                <Col lg={6}>
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <MyBtn link="/contact" caption="Contact us"/>
                    &nbsp;&nbsp;&nbsp;<a href="/pricing">View pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </Col>
                <Col>
                    <img src={homeBannerThumb} alt="homebannerthumb" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner