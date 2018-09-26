import React, { Component } from 'react';
import ScrollableAnchor, {configureAnchors, goToTop} from 'react-scrollable-anchor';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

class App extends Component { 
  componentWillMount() {
    configureAnchors({})
  } 
  render() {    
    return (
      <div>
        <Navbar />
          <div className='container'>
            <ScrollableAnchor id={'jumbotron'}>
              <Jumbotron />
            </ScrollableAnchor>
            <ScrollableAnchor id={'aboutme'}>
              <div>
                <AboutMe />
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'skills'}>
              <Skills />
            </ScrollableAnchor>
            <ScrollableAnchor id={'portfolio'}>
              <Portfolio />
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
              <Contact />
            </ScrollableAnchor>
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
