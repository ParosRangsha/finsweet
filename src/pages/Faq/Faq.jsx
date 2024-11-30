import React, { useState } from 'react'
import './faq.css'
import { Col, Container, Row } from 'react-bootstrap'

const Faq = () => {
  let [ami, setAmi] = useState(0)
  let MyeventOne = ()=>(
    setAmi(1)
  )
  let MyeventTwo = ()=>(
    setAmi(2)
  )
  let MyeventThree = ()=>(
    setAmi(3)
  )
  let MyeventFour = ()=>(
    setAmi(4)
  )
  let MyeventFive = ()=>(
    setAmi(5)
  )
  let nai = ()=>(
    setAmi(0)
  )
  
  return (
    <>
      <div className="faq">
        <Container>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <h2>Frequently Asked Question</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <div className="btns">
                <h3>What is finset about?</h3>
                {ami === 1? <p onClick={nai}>x</p> : <p onClick={MyeventOne}>+</p> }
              </div>
              {ami === 1 && <p className='faqpara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa illum nihil sapiente quasi consectetur, at pariatur quisquam, est itaque doloribus asperiores tempore explicabo labore unde consequuntur temporibus minima distinctio, fugit sunt! Aut, dignissimos repellat repudiandae, exercitationem libero laborum consequatur, fuga dolorem vel ullam harum deleniti quaerat ipsum numquam id aliquam cum tempore esse laboriosam similique iusto. Optio doloribus rem cupiditate ab sequi, aspernatur quasi aut sapiente fuga, vitae quam saepe nostrum libero velit assumenda? Facilis numquam eius sit, facere ducimus eos quaerat doloribus saepe quis veritatis voluptates amet labore corrupti debitis repudiandae ut impedit optio nesciunt blanditiis. Iusto delectus atque consequatur doloremque exercitationem, unde optio saepe ut rem fuga error ipsam quod laudantium quia totam natus qui, cupiditate tenetur commodi consectetur accusamus adipisci incidunt maxime! Est, nesciunt ut! Reiciendis facere corrupti nisi animi nulla saepe minima doloremque sit, rerum porro quos architecto nam quaerat odit molestias, libero soluta ullam?</p>}
            </Col>
          </Row>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <div className="btns">
                <h3>How can I contact you?</h3>
                {ami === 2? <p onClick={nai}>x</p> : <p onClick={MyeventTwo}>+</p> }
              </div>
              {ami === 2 && <p className='faqpara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa illum nihil sapiente quasi consectetur, at pariatur quisquam, est itaque doloribus asperiores tempore explicabo labore unde consequuntur temporibus minima distinctio, fugit sunt! Aut, dignissimos repellat repudiandae, exercitationem libero laborum consequatur, fuga dolorem vel ullam harum deleniti quaerat ipsum numquam id aliquam cum tempore esse laboriosam similique iusto. Optio doloribus rem cupiditate ab sequi, aspernatur quasi aut sapiente fuga, vitae quam saepe nostrum libero velit assumenda? Facilis numquam eius sit, facere ducimus eos quaerat doloribus saepe quis veritatis voluptates amet labore corrupti debitis repudiandae ut impedit optio nesciunt blanditiis. Iusto delectus atque consequatur doloremque exercitationem, unde optio saepe ut rem fuga error ipsam quod laudantium quia totam natus qui, cupiditate tenetur commodi consectetur accusamus adipisci incidunt maxime! Est, nesciunt ut! Reiciendis facere corrupti nisi animi nulla saepe minima doloremque sit, rerum porro quos architecto nam quaerat odit molestias, libero soluta ullam?</p>}
            </Col>
          </Row>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <div className="btns">
                <h3>Do I need an account to use your website?</h3>
                {ami === 3? <p onClick={nai}>x</p> : <p onClick={MyeventThree}>+</p> }
              </div>
              {ami === 3 && <p className='faqpara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa illum nihil sapiente quasi consectetur, at pariatur quisquam, est itaque doloribus asperiores tempore explicabo labore unde consequuntur temporibus minima distinctio, fugit sunt! Aut, dignissimos repellat repudiandae, exercitationem libero laborum consequatur, fuga dolorem vel ullam harum deleniti quaerat ipsum numquam id aliquam cum tempore esse laboriosam similique iusto. Optio doloribus rem cupiditate ab sequi, aspernatur quasi aut sapiente fuga, vitae quam saepe nostrum libero velit assumenda? Facilis numquam eius sit, facere ducimus eos quaerat doloribus saepe quis veritatis voluptates amet labore corrupti debitis repudiandae ut impedit optio nesciunt blanditiis. Iusto delectus atque consequatur doloremque exercitationem, unde optio saepe ut rem fuga error ipsam quod laudantium quia totam natus qui, cupiditate tenetur commodi consectetur accusamus adipisci incidunt maxime! Est, nesciunt ut! Reiciendis facere corrupti nisi animi nulla saepe minima doloremque sit, rerum porro quos architecto nam quaerat odit molestias, libero soluta ullam?</p>}
            </Col>
          </Row>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <div className="btns">
                <h3>How can I create an account?</h3>
                {ami === 4? <p onClick={nai}>x</p> : <p onClick={MyeventFour}>+</p> }
              </div>
              {ami === 4 && <p className='faqpara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa illum nihil sapiente quasi consectetur, at pariatur quisquam, est itaque doloribus asperiores tempore explicabo labore unde consequuntur temporibus minima distinctio, fugit sunt! Aut, dignissimos repellat repudiandae, exercitationem libero laborum consequatur, fuga dolorem vel ullam harum deleniti quaerat ipsum numquam id aliquam cum tempore esse laboriosam similique iusto. Optio doloribus rem cupiditate ab sequi, aspernatur quasi aut sapiente fuga, vitae quam saepe nostrum libero velit assumenda? Facilis numquam eius sit, facere ducimus eos quaerat doloribus saepe quis veritatis voluptates amet labore corrupti debitis repudiandae ut impedit optio nesciunt blanditiis. Iusto delectus atque consequatur doloremque exercitationem, unde optio saepe ut rem fuga error ipsam quod laudantium quia totam natus qui, cupiditate tenetur commodi consectetur accusamus adipisci incidunt maxime! Est, nesciunt ut! Reiciendis facere corrupti nisi animi nulla saepe minima doloremque sit, rerum porro quos architecto nam quaerat odit molestias, libero soluta ullam?</p>}
            </Col>
          </Row>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <div className="btns">
                <h3>I forgot my password. What should I do?</h3>
                {ami === 5? <p onClick={nai}>x</p> : <p onClick={MyeventFive}>+</p> }
              </div>
              {ami === 5 && <p className='faqpara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa illum nihil sapiente quasi consectetur, at pariatur quisquam, est itaque doloribus asperiores tempore explicabo labore unde consequuntur temporibus minima distinctio, fugit sunt! Aut, dignissimos repellat repudiandae, exercitationem libero laborum consequatur, fuga dolorem vel ullam harum deleniti quaerat ipsum numquam id aliquam cum tempore esse laboriosam similique iusto. Optio doloribus rem cupiditate ab sequi, aspernatur quasi aut sapiente fuga, vitae quam saepe nostrum libero velit assumenda? Facilis numquam eius sit, facere ducimus eos quaerat doloribus saepe quis veritatis voluptates amet labore corrupti debitis repudiandae ut impedit optio nesciunt blanditiis. Iusto delectus atque consequatur doloremque exercitationem, unde optio saepe ut rem fuga error ipsam quod laudantium quia totam natus qui, cupiditate tenetur commodi consectetur accusamus adipisci incidunt maxime! Est, nesciunt ut! Reiciendis facere corrupti nisi animi nulla saepe minima doloremque sit, rerum porro quos architecto nam quaerat odit molestias, libero soluta ullam?</p>}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq