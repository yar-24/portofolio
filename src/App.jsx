import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Certificates,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Works,
} from './components';
import Buttonwa from './components/Buttonwa';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certificates />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Buttonwa />
      </div>
    </BrowserRouter>
  );
};

export default App;
