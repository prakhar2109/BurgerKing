import React, { Component } from 'react';
import BuilderControl from './BuilderControl';
import './BuilderControls.css'

class BuilderControls extends Component {
  constructor() {
    super();
    this.state = {
        }
     
  }
  componentDidMount(){
      console.log("CDM of Buildercontrols")
  }
  render() {
      const controls=[
          {label:'Salad',type:'salad'},
          {label:'Bacon',type:'bacon'},
          {label:'Cheese',type:'cheese'},

      ]
     
    return (
        <div className="BuilderControls">
            <p className="Burger-price">Price:{this.props.Burgerprice}</p>
            {controls.map(el=>
                <BuilderControl key={el.label} label={el.label} added={()=>this.props.ingredientsAdded(el.type)} remove={()=>this.props.ingredientsRemove(el.type)} Dis={this.props.lessDisabled[el.type]}/>
                )}
            <button className="OrderButton" disabled={this.props.orderdisabled} onClick={this.props.purchase}>ORDER NOW</button>
        
        </div>
    );
  }
}

export default BuilderControls;