import React from 'react'

const Ask = ({sl, heading, paragraph}) => {
  return (
    <div className="items">
        <div className="sl">{sl}</div>
        <div className="questions">
            <h4>{heading}</h4>
            <p>{paragraph}</p>
        </div>
        <div className="mybtn"><a href="#">-</a></div>
    </div>
    )
}

export default Ask