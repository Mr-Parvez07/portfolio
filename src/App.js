import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Intro from './Intro';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Courses from './Courses';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro ? (
        <Intro onFinish={handleIntroFinish} />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Education />
          <Courses />
          <Projects />
          <Hobbies />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

