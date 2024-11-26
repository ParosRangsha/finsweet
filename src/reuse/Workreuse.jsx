import React from 'react'
import { Col } from 'react-bootstrap'

const Workreuse = ({img, heading, paragraph}) => {
  return (
    <Col lg={6}>
      <img src={img} alt="one" />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </Col>
  )
}

export default Workreuse