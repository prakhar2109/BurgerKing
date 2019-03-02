import React, { Component } from 'react';

import'./Ordersummary.css'
class Ordersummary extends Component {
  constructor() {
    super();
    this.state = {
        }
    
  }
componentWillUpdate(){
    console.log("ordersummary update")
}
  render() {
 
    const OrderSummary=Object.keys(this.props.ingredients)
    .map(el=>{
        return <p><li style={{textTransform:"capitalize"}}>{el}:{this.props.ingredients[el]}</li></p>
    })
    return (
        <div>
            <div style={{display:'flex'}}>
            <h3>Your Order</h3>
            <h2 style={{marginLeft:'10rem',color:'red',display:'flex'}}>Price: <p style={{color:'green',marginTop:'0',marginLeft:'1rem'}}>{this.props.orderprice}</p></h2>
            </div>
            <p>A delecious burger with the following ingredients</p>
            {OrderSummary}
            <h4>Continue to Checkout</h4>
            <div className="Order">
            <button onClick={this.props.checkoutbtn} className="Checkout">Checkout</button><span></span>
            <button onClick={this.props.cancelbtn} className="Cancel">Cancel</button>
            </div>

        </div>
    );
  }
}

export default Ordersummary;