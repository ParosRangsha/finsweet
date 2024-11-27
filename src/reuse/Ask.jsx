import React from 'react'

const Ask = ({sl, heading, paragraph, btn}) => {
  return (
    <div className="items">
        <div className="sl">{sl}</div>
        <div className="questions">
            <h4>{heading}</h4>
            <p>{paragraph}</p>
        </div>
        <div className="mybtn"><a href="#">{btn}</a></div>
    </div>
    )
}

export default Ask