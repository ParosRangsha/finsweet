import React from 'react'
import './features.css'
import { Container, Row } from 'react-bootstrap'
import Benefitbox from '../../reuse/Benefitbox'
import Bannerreuse from '../../reuse/Bannerreuse'
import featurebanner from "../../img/featurebanner.svg"
import support from '../../img/support.png'
import biconOne from '../../img/benefiticon1.png'
import biconTwo from '../../img/benefiticon2.png'
import biconThree from '../../img/benefiticon3.png'

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
    </>
  )
}

export default Features