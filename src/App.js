import './App.css';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import NavBar from './Components/NavBar/NavBar'
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
