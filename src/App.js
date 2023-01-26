import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="wrapper">
    <div className="header">
      <img src={require('./assests/background.jpg')} className="background" alt="mountain" />
      <img src={require('./assests/Trees.png')} className="foreground" alt="trees"/>
      <h2 className="title display-1 fw-bold">Hello, I'm Kevin!</h2>
      {/* <div className="scroll-down"></div> */}
      <a class="scroll-down" href="#scrollspyHeading1"></a>
    </div>
    <div className="section">
      <Container>
        <Row className="d-flex flex-column mt-5">
          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
            <h4 id="scrollspyHeading1"></h4>
            <Col><About /></Col>
          </div>
          <br></br>
          <Col><Projects /></Col>
          <Col><Contact /></Col>
        </Row>
      </Container>
        </div>  

    </div>
  );
}

export default App;
