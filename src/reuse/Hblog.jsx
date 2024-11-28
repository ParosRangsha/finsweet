import React from 'react'
import Viewmore from './Viewmore'
import { Col } from 'react-bootstrap'

const Hblog = ({img, date, heading, paragraph}) => {
  return (
    <Col lg={4}>
        <div className="item">
            <div className="thumb">
                <img src={img} alt="" />
            </div>
            <h6>{date}</h6>
            <h5>{heading}</h5>
            <p>{paragraph}</p>
            <Viewmore link="/blog" caption="Read more"/>
        </div>
    </Col>
  )
}

export default Hblog