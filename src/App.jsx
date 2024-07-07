import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Map from './sections/Map/Map';
import Formation from './sections/Formation/Formation';
import Certificats from './sections/Certificats/Skills';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Formation />
      <Certificats />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
