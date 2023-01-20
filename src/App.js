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
      <div className="scroll-down"></div>
    </div>
    <div className="section">
      <Container>
        <Row className="d-flex flex-column p-5">
          <Col><About /></Col>
          <Col><Projects /></Col>
          <Col><Contact /></Col>
        </Row>
      </Container>
        </div>  

    </div>
  );
}

export default App;
