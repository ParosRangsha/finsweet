import React from 'react'
import './blog.css'
import { Col, Container, Row } from 'react-bootstrap'
import blogban from '../../img/blogban.png'
import blogOne from '../../img/blog1.png'
import blogTwo from '../../img/blog2.png'
import blogThree from '../../img/blog3.png'
import blogFour from '../../img/blog4.png'
import blogFive from '../../img/blog5.png'
import blogSix from '../../img/blog6.png'
import Blogitems from '../../reuse/Blogitems'


const Blog = () => {
  return (
    <>
      <div className="blogban">
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
      <div className="blogitems">
        <Container>
          <Row>
            <h2>Our Blog</h2>
          </Row>
          <Row>
            <Blogitems img={blogOne} date="20 Nov 2024" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" vlink="/blogtarget" vcaption="Read more"/>
            <Blogitems img={blogTwo} date="20 Nov 2024" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" vlink="/blogtarget" vcaption="Read more"/>
            <Blogitems img={blogThree} date="20 Nov 2024" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" vlink="/blogtarget" vcaption="Read more"/>
            <Blogitems img={blogFour} date="20 Nov 2024" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" vlink="/blogtarget" vcaption="Read more"/>
            <Blogitems img={blogFive} date="20 Nov 2024" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" vlink="/blogtarget" vcaption="Read more"/>
            <Blogitems img={blogSix} date="20 Nov 2024" subhead="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" vlink="/blogtarget" vcaption="Read more"/>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog