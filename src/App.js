import React from 'react';
import "./App.css";
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Sidebar from './components/sidebar/sidebar';
import Resume from './components/resume/resume';
import { Portfolio } from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <>
<Sidebar />
<main className="main">
<Home />
<About />
<Services /> 
<Resume />
<Portfolio />
<Contact />

</main>
</>
  )
}

export default App