import React from 'react'
import './features.css'
import { Col, Container, Row } from 'react-bootstrap'
import Benefitbox from '../../reuse/Benefitbox'
import Bannerreuse from '../../reuse/Bannerreuse'
import Ask from '../../reuse/Ask'
import featurebanner from "../../img/featurebanner.svg"
import support from '../../img/support.png'
import biconOne from '../../img/benefiticon1.png'
import biconTwo from '../../img/benefiticon2.png'
import biconThree from '../../img/benefiticon3.png'
import reviewthumbOne from '../../img/explain1.png'
import reviewthumbTwo from '../../img/explain2.png'
import reviewthumbThree from '../../img/explain3.png'
import reviewthumbFour from '../../img/explain4.png'
import Viewmore from '../../reuse/Viewmore'

const Features = () => {
  return (
    <>
      <Bannerreuse heading="All the features you need" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." btnlink="/pricing" btncaption="View pricing" viewlink="/pricing" viewcaption="See more" img={featurebanner} imgcaption="feature banner"/>
      <div className="featuresupport">
        <Container>
          <Row>
            <img src={support} alt="" />
          </Row>
        </Container>
      </div>
      <div className="featurebenefit">
        <Container>
          <Row>
            <h2>The benefits of working with our team</h2>
          </Row>
          <Row>
          <Benefitbox img={biconOne} heading="Customize with ease" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
          <Benefitbox img={biconTwo} heading="Perfectly Responsive" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
          <Benefitbox img={biconThree} heading="Friendly Support" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."/>
        </Row>
        </Container>
      </div>
      <div className="featureReview">
        <Container>
          <Row className='frt'>
            <Col lg={6} className='reviewtxt'>
              <h6>Use Client-first</h6>
              <h3>Top agencies and freelancers around the world use Client-first </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </Col>
            <Col lg={6}>
              <img src={reviewthumbOne} alt="review thumb" />
            </Col>
          </Row>
          <Row className='frt'>
            <Col lg={6}>
              <img src={reviewthumbTwo} alt="review thumb" />
            </Col>
            <Col lg={6} className='reviewtxt'>
              <h6>Free Revision Rounds</h6>
              <h3>Get free Revisions and one week of free maintenance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </Col>
          </Row>
          <Row className='frt'>
            <Col lg={6} className='reviewtxt'>
              <h6>24/7 Support</h6>
              <h3>Working with us, you will be getting 24/7 priority support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </Col>
            <Col lg={6}>
              <img src={reviewthumbThree} alt="review thumb" />
            </Col>
          </Row>
          <Row className='frt'>
            <Col lg={6}>
              <img src={reviewthumbFour} alt="review thumb" />
            </Col>
            <Col lg={6} className='reviewtxt'>
              <h6>Quick Delivery</h6>
              <h3>Guranteed 1 week delivery for standard five pager website</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="featureask">
        <Container>
          <Row>
            <Col lg={4}>
              <h2>Frequently asked questions</h2>
              <Viewmore link="/faq" caption="Contact us for more info"/>
            </Col>
            <Col lg={8} className='myquestions'>
              <Ask sl="01" heading="Frequently asked questions" btn="-" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <Ask sl="02" heading="What is your class naming convention?" btn="+" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <Ask sl="03" heading="How do you communicate?" btn="+" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <Ask sl="04" heading="I have a bigger project. Can you handle it?" btn="+" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
              <Ask sl="05" heading="What is your class naming convention?" btn="+" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Features