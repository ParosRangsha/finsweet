import React, { useState } from 'react'
import './home.css'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../../components/banner/Banner'
import Workreuse from '../../reuse/Workreuse'
import One from '../../img/pointOne.png'
import Two from '../../img/pointTwo.png'
import Three from '../../img/pointThree.png'
import Four from '../../img/pointFour.png'
import cardOne from '../../img/projectcard1.png'
import cardTwo from '../../img/projectcard2.png'
import cardThree from '../../img/projectcard3.png'
import ficonOne from '../../img/featureicon1.png'
import ficonTwo from '../../img/featureicon2.png'
import ficonThree from '../../img/featureicon3.png'
import ficonFour from '../../img/featureicon4.png'
import ficonFive from '../../img/featureicon5.png'
import ficonSix from '../../img/featureicon6.png'
import profilepic from '../../img/profilethumb.png'
import writting from '../../img/writting.png'
import blog1 from '../../img/business.png'
import blog2 from '../../img/woman.png'
import blog3 from '../../img/class.png'

import MyBtn from '../../reuse/MyBtn'
import Viewmore from '../../reuse/Viewmore'
import Feature from '../../reuse/Feature'
import Profile from '../../reuse/Profile'
import Hblog from '../../reuse/Hblog'

const Home = () => {
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
      <Banner/>
      <div className="homework">
        <Container>
          <Row>
            <Col lg={5} className='workDetails'>
              <h2>How we work</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim, repellat laborum laboriosam debitis libero.</p>
              {/* <a href="/contact">Get in touch with us <i class="fa-solid fa-arrow-right-long"></i></a> */}
              <MyBtn link="/contact" caption="my btn"/>
            </Col>
            <Col lg={{span:6, offset:1}}>
              <Row>
                <Workreuse img={One} heading="Strategy" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <Workreuse img={Two} heading="Wireframing" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <Workreuse img={Three} heading="Design" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <Workreuse img={Four} heading="Development" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="homeproject">
        <Container>
          <Row>
            <Col lg={6} className='projectHeading'>
              <h2>View our projects</h2>
            </Col>
            <Col lg={6} className='viewmore'>
              <Viewmore link="features" caption="View More"/>
            </Col>

          </Row>
          <Row>
            <Col lg={8} className='leftpart thumb'>
              <img src={cardOne} alt="card" />
              <div className="overflow">
                <h3>Workhub office Webflow Webflow Design</h3>
                <Viewmore link="/features" caption="View more"/>
              </div>
            </Col>
            <Col lg={4} className='rightpart'>
              <div className="thumb">
                <img src={cardTwo} alt="card" />
                <div className="overflow">
                  <h3>Unisaas Website Design</h3>
                  <Viewmore link="/features" caption="View more"/>
                </div>
              </div>
              <div className="thumb">
                <img src={cardThree} alt="card" />
              </div>
              
            </Col>
          </Row>
        </Container>
      </div>
      <div className="homefeatures">
        <Container>
          <p>Features</p>
          <Row>
            <Col lg={{span:6, offset:3}}>
            <h2>Design that solves problems, one product at a time</h2>
            </Col>
          </Row>
          <Row>
            <Feature img={ficonOne} heading="Uses Client First" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <Feature img={ficonTwo} heading="Two Free Revision Round" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <Feature img={ficonThree} heading="Template Customization" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <Feature img={ficonFour} heading="24/7 Support" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <Feature img={ficonFive} heading="Quick Delivery" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <Feature img={ficonSix} heading="Hands-on approach" paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
          </Row>
        </Container>
      </div>
      <div className="homereview">
        <Container>
          <Row>
            <Col lg={4}>
              <h2>What our clients say about us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </Col>
            <Col lg={{span:7, offset:1}}>
              <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
              <Profile img={profilepic} title="Jenny Wilson" desig="Vice President"/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="homeask">
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
      <div className="homemessage">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={writting} alt="writting" />
            </Col>
            <Col lg={6} className='form'>
              <h3>Send Inquiry</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <input type="text" placeholder='Your Name'/>
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='Paste your Figma design URL'/>
              <MyBtn link="/message" caption="Send Inquiry"/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="homeblog">
        <Container>
          <h2>Our Blog</h2>
          <Row>
            <Hblog img={blog1} heading="How one Webflow user grew his single person consultancy from $0-100K in 14 months" date="24 Nov 2024" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
            <Hblog img={blog2} heading="How one Webflow user grew his single person consultancy from $0-100K in 14 months" date="24 Nov 2024" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
            <Hblog img={blog3} heading="How one Webflow user grew his single person consultancy from $0-100K in 14 months" date="24 Nov 2024" paragraph="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home