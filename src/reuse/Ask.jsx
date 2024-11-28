import React from 'react'

const Ask = ({sl, heading, paragraph, btn}) => {
  return (
    <div className="items">
        <div className="sl">{sl}</div>
        <div className="questions">
            <h4>{heading}</h4>
            <p>{paragraph}</p>
        </div>
        <div className="mybtn"><a href="#" className='plus'>+</a><a href="#" className='minus'>-</a></div>
    </div>
    )
}

export default Ask