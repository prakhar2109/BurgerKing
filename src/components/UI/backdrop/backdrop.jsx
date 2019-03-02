import React, { Component } from 'react';

import'./backdrop.css'
class backdrop extends Component {
  constructor() {
    super();
    this.state = {
        }
    
  }
  render() {

    return (
       
        <div >
           
            {this.props.showModal?<div className="Backdrop" onClick={this.props.modalClosed}></div>:null}
            
        </div>
       
    );
  }
}

export default backdrop;