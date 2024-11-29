import React from 'react'
import { Col } from 'react-bootstrap'

const Aboutman = ({img, name, desig}) => {
  return (
    <Col lg={3}>
        <div className="box">
            <img src={img} alt="man" />
            <h5>{name}</h5>
            <p>{desig}</p>
        </div>
    </Col>
  )
}

export default Aboutman