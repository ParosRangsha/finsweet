import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import MyBtn from './MyBtn'
import Viewmore from './Viewmore'

const Bannerreuse = ({heading, paragraph, btnlink, btncaption, viewlink, viewcaption, img, imgcaption}) => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col lg={6}>
              <h1>{heading}</h1>
              <p>{paragraph}</p>
              <MyBtn link={btnlink} caption={btncaption}/>
              &nbsp;&nbsp;&nbsp; <Viewmore link={viewlink} caption={viewcaption}/>
          </Col>
          <Col>
              <img src={img} alt={imgcaption} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Bannerreuse