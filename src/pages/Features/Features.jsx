import React, { useState } from 'react'
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
  let [dek, setDek] = useState(0)
  let changeOne = ()=>(
    setDek(1)
  )
  let changeTwo = ()=>(
    setDek(2)
  )
  let changeThree = ()=>(
    setDek(3)
  )
  let changeFour = ()=>(
    setDek(4)
  )
  let changeFive = ()=>(
    setDek(5)
  )
  let changeZero = ()=>(
    setDek(0)
  )
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
            <div className="items">
                <div className="sl">01</div>
                <div className="questions">
                    <div className="heading">
                      <h4>Frequently asked questions</h4>
                      { dek === 1? <p onClick={changeZero} className='crossshow'>-</p> : <p onClick={changeOne} className='crossshow'>+</p>  }
                    </div>
                    {dek === 1 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
              </div>
              <div className="items">
                <div className="sl">02</div>
                <div className="questions">
                    <div className="heading">
                      <h4>What is your class naming convention?</h4>
                      { dek === 2? <p onClick={changeZero} className='crossshow'>-</p> : <p onClick={changeTwo} className='crossshow'>+</p>  }
                    </div>
                    {dek === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
              </div>
              <div className="items">
                <div className="sl">03</div>
                <div className="questions">
                    <div className="heading">
                      <h4>How do you communicate?</h4>
                      { dek === 3? <p onClick={changeZero} className='crossshow'>-</p> : <p onClick={changeThree} className='crossshow'>+</p>  }
                    </div>
                    {dek === 3 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
              </div>
              <div className="items">
                <div className="sl">04</div>
                <div className="questions">
                    <div className="heading">
                      <h4>I have a bigger project. Can you handle it?</h4>
                      { dek === 4? <p onClick={changeZero} className='crossshow'>-</p> : <p onClick={changeFour} className='crossshow'>+</p>  }
                    </div>
                    {dek === 4 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
              </div>
              <div className="items">
                <div className="sl">05</div>
                <div className="questions">
                    <div className="heading">
                      <h4>What is your class naming convention?</h4>
                      { dek === 5? <p onClick={changeZero} className='crossshow'>-</p> : <p onClick={changeFive} className='crossshow'>+</p>  }
                    </div>
                    {dek === 5 && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Features