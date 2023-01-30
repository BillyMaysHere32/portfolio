import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
  return (
    <div className="component mb-5">
      <h2 className="component-title fw-bold">Projects</h2>
      <hr></hr>

      <Row md={1} lg={2} className="d-flex flex-row justify-content-between align-items-center mb-5">
        <Carousel interval={1700} className='mb-2'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../assests/gun1.jpg')}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../assests/gun3.jpg')}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../assests/gun2.jpg')}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div>
          <h3 className="project-title fw-bold">Safety Arms Systems</h3>
          <p className="lead">Designed and developed website for this startup. Management wanted a clone of the Tesla CyberTruck interface. Time management and team collaboration were crucial in executing multiple projects simultaneously to meet critical deadlines.</p>
          <div>
          <Button href="https://safetyarmsusa.com/" variant="outline-light">Website</Button>
          </div>
        </div>
      </Row>
      
      <Row md={1} lg={2} className="d-flex flex-row justify-content-between align-items-center mb-5">
          {/* <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://brilliant-creponne-076f96.netlify.app/" allowFullScreen></iframe>
          </div> */}
        <Carousel interval={1700} className='mb-2'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../assests/app1.jpg')}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../assests/app2.jpg')}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../assests/app3.jpg')}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        
        <div>
          <h3 className="project-title fw-bold">Social Media App</h3>
          <p className="lead">Designed and developed a full-stack CRUD app using React, NodeJs, Express and MongoDB. To allow users to create, update or delete a post.</p>
          <div>
            <Button variant="outline-light " href="https://brilliant-creponne-076f96.netlify.app/">Live Demo</Button>
            <Button variant="outline-light" href="https://github.com/BillyMaysHere32/social-media-app-2">View Code</Button>
          </div>
        </div>
      </Row>

    </div>
  )
}
