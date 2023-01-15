import About from "./components/About"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
