import React, { Component } from 'react';

import'./BuilderControl.css'
class BuilderControl extends Component {
  constructor() {
    super();
    this.state = {
        }
    
  }
  render() {

    return (
        <div className="BuilderControl">
            <div>{this.props.label}</div>
            <button className="Less" onClick={this.props.remove} id="lessbutton" disabled={this.props.Dis}>less</button>
            <button className="More" onClick={this.props.added}>More</button>

            
        </div>
    );
  }
}

export default BuilderControl;