import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./component/Navbar";
import About from './component/About/About.jsx';
import Work from './component/Work/Work.jsx';
import Skill from './component/Skill/Skill.jsx';
import Contact from './component/Contact/Contact.jsx';
import SocialMedia from './component/SocialMedia.jsx';
import Footer from './component/Footer.jsx';
 import HeroPage from './component/Home/HeroPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <SocialMedia/>
      <Routes>
        <Route path="/" element={
          <>
            <HeroPage/>
            <About />
            <Work />
            <Skill />
            <Contact />
          </>
        } />
        
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work />} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/contacts" element={<Contact/>} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
