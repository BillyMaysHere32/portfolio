import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
  return (
    <div className="component p-5">
      <h2 className="component-title fw-bold">Projects</h2>
      <hr></hr>
      <Row xl={3} className="d-flex justify-content-between align-items-top">
      <Row   className="d-flex flex-row justify-content-between align-items-center mb-5">
          <Carousel interval={1700} className='mb-3'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/gun1.jpg')}
                alt="First slide"
              />
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
      <Row  className="mb-5">
          <Carousel interval={1700} className='mb-3'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/layout.png')}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/layout2.png')}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/layout3.png')}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <h3 className="project-title fw-bold">Landing Page</h3>
            <p className="lead">
            ▪ Landing page I developed as part of a user-friendly dynamic/responsive website for a client.
            <br></br>▪ Developed from design concepts and wireframes with a mobile first approach and emphasis on user experience. 
            <br></br>▪ This example was developed only using HTML, CSS, JavaScript and SASS.
            </p>
          <div>
              <Button variant="outline-light " href="https://tri-county-landing-page.netlify.app/">Live Demo</Button>
              <Button variant="outline-light" href="https://github.com/BillyMaysHere32/landing-page-tri-county">View Code</Button>
            </div>
          </div>
        </Row>
      <Row  className="mb-5">
          <Carousel interval={1700} className='mb-3'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/ai1.jpeg')}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/ai2.jpeg')}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/ai3.jpeg')}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <h3 className="project-title fw-bold">AI Image Generator/Social Media App</h3>
            <p className="lead">
              Create original, realistic images and art from a text description using the powerful DALL·E AI system. 
              This full-stack app was created using React, NodeJs, Express and MongoDB along with Redux Toolkit for state management.
            </p>
            <div>
              <Button variant="outline-light " href="https://bit-pic.netlify.app/">Live Demo</Button>
              <Button variant="outline-light" href="https://github.com/BillyMaysHere32/fullstack-ai-image-generation-app">View Code</Button>
            </div>
          </div>
        </Row>


        <Row   className="d-flex flex-row justify-content-center align-items-center mb-5">
          <div  className='mb-3 justify-content-center'>
            <div className='justify-content-center'>
              <img
              style={{height: '300px'}}
                className=""
                src={require('../assests/gunMobile.jpg')}
                alt="First slide"
              />
            </div>
            {/* <Carousel.Item>
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
            </Carousel.Item> */}
          </div>
          <div>
            <h3 className="project-title fw-bold">Safety Arms Systems</h3>
            <p className="lead">Designed and developed mobile app using React Native that connects to the firearm to track and lock/unlock the weapon. </p>
            <div>
            <Button href="https://safetyarmsusa.com/" variant="outline-light">Website</Button>
            </div>
          </div>
        </Row>


        <Row  className="mb-5">
          <Carousel interval={1700} className='mb-3'>
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
              <Button variant="outline-light " href="https://getz-social-media-app.netlify.app/">Live Demo</Button>
              <Button variant="outline-light" href="https://github.com/BillyMaysHere32/social-media-app-2">View Code</Button>
            </div>
          </div>
        </Row>

        <Row   className="d-flex flex-row justify-content-between align-items-center mb-5">
          <Carousel interval={1700} className='mb-3'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/shop1.jpg')}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/shop2.jpg')}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assests/shop3.jpg')}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          
          <div>
            <h3 className="project-title fw-bold">E-commerce/Registry App</h3>
            <p className="lead">Website developed using React/Express/Node and integrated with Stripe API to allow users to select items to donate to our wedding fund.</p>
            <div>
              <Button variant="outline-light " href="https://getz-wedding-registry.netlify.app">Live Site</Button>
              <Button variant="outline-light" href="https://github.com/BillyMaysHere32/wedding-donation-stripe-app">View Code</Button>
            </div>
          </div>
        </Row>


      </Row>
    </div>
  )
}
