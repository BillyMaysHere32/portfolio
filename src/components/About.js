import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <div>
      <Container>
      <Row className="d-flex flex-row justify-content-around align-items-center">
          <Col md={12} lg={4}>
          <img src={require('../assests/me.jpg')} className="profile" alt="me" />
          </Col>
          <Col md={12} lg={8}>
          <p>I’m a MERN full‑stack developer that enjoys approaching my projects with a user‑first perspective. My passion is creating responsive applications using modern tools such as React and NodeJs, with focus on user experience.</p>
        </Col>
        </Row>
      </Container>
    </div>
  )
}
