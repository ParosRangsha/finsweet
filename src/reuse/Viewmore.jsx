import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Viewmore = ({link, caption}) => {
  return (
    <Link to={link}>{caption}<i class="fa-solid fa-arrow-right-long"></i></Link>
  )
}

export default Viewmore