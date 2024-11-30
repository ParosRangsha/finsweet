import React from 'react'
import { Col } from 'react-bootstrap'
import Vewmore from '../reuse/Viewmore'
import Viewmore from '../reuse/Viewmore'


const Blogitems = ({img, date, subhead, paragraph, vlink, vcaption}) => {
  return (
    <Col lg={4}>
      <div className="box">
        <div className="thumb">
          <img src={img} alt="blog thumb" />
        </div>
          <p>{date}</p>
          <h5>{subhead}</h5>
          <p>{paragraph}</p>
          <Viewmore link={vlink} caption={vcaption}/>
          
      </div>
    </Col>
  )
}

export default Blogitems