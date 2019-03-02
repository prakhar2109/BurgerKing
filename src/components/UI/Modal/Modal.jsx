import React, { Component } from 'react';

import'./Modal.css'
import Backdrop from '../backdrop/backdrop'
class Modal extends Component {
  constructor() {
    super();
    this.state = {
        }
    
  }
  
  shouldComponentUpdate(nextProps,nextState){
      console.log(nextProps.children,"nextPrdopschildren");
      console.log(this.props.children,"this.props.children")
      return nextProps.showModal!==this.props.showModal|| nextProps.children!==this.props.children;
  }
  
  render() {
    console.log(this.props.showModal,"showModal2")
    return (
        <div>
            {/* <Backdrop showModal={this.props.showModal} modalClosed={this.props.modalClosed} /> */}
                <div className="Modal" style={{transform: this.props.showModal ? 'translateY(0)':'translateY(-100vh)'}}>
                    {this.props.children}
                    
                    
                </div> 
        </div>
    );
  }
}

export default Modal;