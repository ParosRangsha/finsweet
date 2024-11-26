import React from 'react'
import { Col } from 'react-bootstrap'

const Viewmore = ({link, caption}) => {
  return (
    <a href={link}>{caption} <i class="fa-solid fa-arrow-right-long"></i></a>
  )
}

export default Viewmore