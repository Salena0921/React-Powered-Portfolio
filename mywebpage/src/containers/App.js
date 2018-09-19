import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className='container'>
            <Jumbotron />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
