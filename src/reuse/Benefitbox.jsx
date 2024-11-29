import React from 'react'
import { Col } from 'react-bootstrap'

const Benefitbox = ({img, heading, paragraph}) => {
  return (
    <Col lg={4}>
        <div className="box">
            <img src={img} alt="benefit icon" />
            <h5>{heading}</h5>
            <p>{paragraph}</p>
        </div>
    </Col>
  )
}

export default Benefitbox