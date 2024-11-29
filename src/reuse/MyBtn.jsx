import React from 'react'
import { Link } from 'react-router-dom'

const MyBtn = ({link, caption}) => {
  return (
    <Link to={link} className='btnContact'>{caption}</Link>
  )
}

export default MyBtn