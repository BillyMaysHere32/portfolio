import About from "./components/About"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

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
      <h1 className="title display-1 fw-bold">Welcome!</h1>
    </div>
    <div className="section">
      <Container>
        <Row className="d-flex flex-row justify-content-between align-items-center">
          <Col>
          <img src={require('./assests/me.jpg')} className="profile" alt="me" />
          </Col>
          <Col>
          <div>I’m a full‑stack developer </div>
        </Col>
        </Row>
        <Row className="d-flex flex-column p-5">
          <Col><About /></Col>
          <Col><Skills /></Col>
          <Col><Projects /></Col>
          <Col><Contact /></Col>
        </Row>
      </Container>
        </div>  

    </div>
  );
}

export default App;
