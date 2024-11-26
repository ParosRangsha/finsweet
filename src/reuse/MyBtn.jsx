import React from 'react'

const MyBtn = ({link, caption}) => {
  return (
    <a href={link} className='btnContact'>{caption}</a>
  )
}

export default MyBtn