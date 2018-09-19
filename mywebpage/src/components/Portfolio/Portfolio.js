import React, { Component } from 'react';
import Graphics from './GraphicsPortfolio/Graphics';
import Web from './WebPortfolio/Web';

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-6">
                <Graphics />
            </div>
            <div className="col-6">
                <Web />
            </div>
        </div>        
      </div>
    );
  }
}

export default Portfolio;