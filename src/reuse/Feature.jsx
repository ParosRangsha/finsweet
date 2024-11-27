import React from 'react'
import { Col } from 'react-bootstrap'
const Feature = ({img, heading, paragraph}) => {
  return (
    <Col lg={4} className='items'>
        <img src={img} alt="icon" />
        <h4>{heading}</h4>
        <p>{paragraph}</p>
    </Col>
  )
}

export default Feature