import React from 'react'
import Skills from '../Components/Skills'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function About() {
  return (
    <div className='component'>
      <h2 className="component-title fw-bold">About Me</h2>
      <hr></hr>
      <Container className="mb-5 mt-5">
      <Row className="d-flex flex-row justify-content-between align-items-center g-5">
          <Col md={12} lg={6} className="d-flex flex-column justify-content-center align-items-center">
            <img src={require('../assests/me.jpg')} className="profile mb-5" alt="me" />
            <p className="lead">I am a MERN full stack developer that enjoys creating responsive applications using modern tools such as React and NodeJs, with focus on user experience. My passion is problem solving and ultimately to develop things that propel businesses forward. I love the outdoors and my other hobbies include golf, video games, garage gyms and anything that is Star Wars.</p>
          </Col>

          <Col className="pt-5">
            <Skills />
          </Col>
        </Row>
      </Container>
    </div>
  )
}