import React from 'react'
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
import MyBtn from '../../reuse/MyBtn'
import Viewmore from '../../reuse/Viewmore'

const Home = () => {
  return (
    <>
      <Banner/>
      <div className="work">
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
      <div className="project">
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
    </>
  )
}

export default Home