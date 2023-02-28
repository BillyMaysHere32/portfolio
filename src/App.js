import About from "./Components/About"
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import Navigation from "./Components/Navigation"
import SkillsIcons from './Components/SkillsIcons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navigation />
      <div className="wrapper">
        <div className="header" id="home">
          <img src={require('./assests/m8.jpg')} className="background" alt="mountain" />
          {/* <img src={require('./assests/Tree1.png')} className="foreground" alt="trees"/> */}
          <div className="d-flex flex-column align-items-center">
            <h2 className="title display-1 fw-bold mb-5">Hello, I'm Kevin.</h2>
            <h3 className="title fw-bold">Full Stack Web Developer. I create websites, 
            software, and solutions that make your business thrive!</h3>
        </div> 
        <a class="scroll-down" href="#aboutComponent"></a>
        </div>
            <Row className="d-flex flex-column mt-5">
              <Col id="aboutComponent"><About /></Col>
              <Col><SkillsIcons /></Col>
              <Col id="projectComponent"><Projects /></Col>
              <Col id="contactComponent"><Contact /></Col>
            </Row>
      </div>
    </>
  );
}

export default App;
