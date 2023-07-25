import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_ybtifoz', 'template_rw1kl0s', form.current, 'udzqDcPaUVHp8xI8W')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current.reset();
  };
  return (
    <>
      <div className="contact p-5">
      <br></br>
        <h2 className="component-title fw-bold" style={{ textAlign: 'center'}}>Contact</h2>
        <hr></hr>
        <br></br>
        <div className="contactContainer">
          <form ref={form} onSubmit={sendEmail}>
            {/* <h3 className='text-white mb-3'>Write me an email</h3> */}
            <FloatingLabel controlId="name" label="Name" className="mb-3">
              <Form.Control name="name" as="textarea" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="email" label="Email address" className="mb-3">
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </FloatingLabel>
            
            <FloatingLabel controlId="message" label="Message" >
              <Form.Control name="message" as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
            </FloatingLabel>

            <div className="d-grid mt-3">
              <Button variant="outline-light" type="submit" size="lg">Submit</Button>
            </div>
          </form>
          <div className="">
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <h4 className="text-muted">Direct Contact</h4>
                <h1 className="mt-3 project-title fw-bold">Kgetz32@gmail.com</h1>
                <h4 className="mt-4 text-muted">Social media:</h4>
                <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                  <Button size="lg" variant="outline-light" href="https://www.linkedin.com/in/kevin-getz-06645120b/"><FaLinkedin /></Button>
                  <Button size="lg" variant="outline-light" href="https://github.com/BillyMaysHere32/"><FaGithub /></Button>
                </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>

      </div>
      <div>
        <p className='copyright m-4'>Copyright © 2022 | Kevin Getz</p>
      </div>
     
    </>
  )
}

// import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import Button from 'react-bootstrap/Button';

// export default function Contact() {
//   return (
//     <>
//     <div className="contact p-5">
//         <h2 className="text-center component-title fw-bold">Contact</h2>
//         <hr></hr>
//         <div className="mt-5 d-flex flex-column justify-content-center align-items-center ">
//           <h4 className="mt-3 text-muted">Write me an email at:</h4>
//           <h1 className="project-title fw-bold">Kgetz32@gmail.com</h1>
//           <h4 className="mt-3 text-muted">Or</h4>
//           <h4 className="mt-3 text-muted">Reach me through social media:</h4>
//           <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
//             <Button size="lg" variant="outline-light" href="https://www.linkedin.com/in/kevin-getz-06645120b/"><FaLinkedin /></Button>
//             <Button size="lg" variant="outline-light" href="https://github.com/BillyMaysHere32/"><FaGithub /></Button>
//           </div>
//       </div>
//     </div>
//     <div>
//     <p className='copyright m-4'>Copyright © 2022 | Kevin Getz</p>
//     </div>
//     </>
//   )
// }