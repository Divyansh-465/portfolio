import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import Projects from './Projects/Projects.jsx'
import Skills from './Skills/Skills.jsx'
import Contacts from './Contacts/Contacts.jsx'


function App() {

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="body">
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </div>
    </>
  );
}

export default App;
