import React from 'react'
import './banner.css'
import homeBannerThumb from '../../img/homebannerthumb.png'
import { Col, Container, Row } from 'react-bootstrap'
import MyBtn from '../../reuse/MyBtn'
import Viewmore from '../../reuse/Viewmore'
import Bannerreuse from '../../reuse/Bannerreuse'

const Banner = () => {
  return (
    <Bannerreuse heading="Building stellar websites for early startups" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." btnlink="/features" btncaption="View our work" viewlink="/pricing" viewcaption="View pricing" img={homeBannerThumb} imgcaption="banner" />
  )
}

export default Banner