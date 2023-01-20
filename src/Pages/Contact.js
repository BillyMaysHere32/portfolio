import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="mt-5">
        <h2 className="text-center component-title fw-bold">Contact</h2>
        <hr></hr>
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center ">
          <h4 className="mt-3 text-muted">Write me an email at:</h4>
          <h1 className="project-title fw-bold">Kgetz32@gmail.com</h1>
          <h4 className="mt-3 text-muted">Or</h4>
          <h4 className="mt-3 text-muted">Reach me through social media:</h4>
          <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
            <Button size="lg" variant="outline-light" href="https://www.linkedin.com/in/kevin-getz-06645120b/"><FaLinkedin /></Button>
            <Button size="lg" variant="outline-light" href="https://github.com/BillyMaysHere32/"><FaGithub /></Button>
          </div>
      </div>
    </div>
  )
}
