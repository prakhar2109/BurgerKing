import React, { Component } from 'react';


import Burger from '../burger/burger.js'
import BuilderControls from '../burger/BurgerBuilder/BuilderControls.jsx';
import Modal from '../UI/Modal/Modal'
import OrderSummary from '../../components/burger/BurgerBuilder/Ordersummary/Ordersummary';
import axios from '../../axios-order'
import Loader from '../UI/Spinner/Spinner'
const INGREDIENT_PRICES={
    salad:50,
    cheese:40,
    bacon:20
}
class Burgerking extends Component {
  constructor() {
    super();
    this.state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0
        },
        lessDisabled:false,
        totalPrice:4,
        Orderbuttondisabled:true,
        PurchaseMode:false,
        loading:false
    }
  }
  componentWillMount(){
      console.log("CWL of Burgerbuilder")
  }
  modalClosedfun=()=>{
    this.setState({PurchaseMode:false})
  }
  purchase=()=>{
      this.setState({PurchaseMode:true})
    

  }
  CancelbuttonFun=()=>{
    this.setState({PurchaseMode:false})
  }
  CheckoutbuttonFun=()=>{
      this.setState({loading:true})
      const data = {
          ingredients :this.state.ingredients
      }
     axios.post('/orders.json',data)
     .then(response=>
         this.setState({loading:false,PurchaseMode:false})

     )
     .catch(response=>
        this.setState({loading:false,PurchaseMode:false}))
        
}
  OrderbuttonDisabled=(ingredients)=>{
     
      const sum=Object.keys(ingredients)
      .map(id=>
        {
            return ingredients[id]
        })
        .reduce((sum,el)=>{
            return sum+el
        },0);
       
    this.setState({Orderbuttondisabled:sum<=0});
  }
  addIngredient=(type)=>{
   
      const oldCount=this.state.ingredients[type];
      const updatedCount =oldCount + 1;
      const updatedIngredients={
          ...this.state.ingredients
      };
      updatedIngredients[type]=updatedCount;
      const PriceAddition=INGREDIENT_PRICES[type];
      const oldPrice =this.state.totalPrice;
      const newPrice= oldPrice+PriceAddition;
      this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
      this.OrderbuttonDisabled(updatedIngredients)
     
    
  }
  removeIngredient=(type)=>{
   
    const oldCount=this.state.ingredients[type];
    if(oldCount<=0){
        return this.setState({lessDisabled:true})
    }
    const updatedCount =oldCount -1;
    const updatedIngredients={
        ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
    const PriceAddition=INGREDIENT_PRICES[type];
    const oldPrice =this.state.totalPrice;
    const newPrice= oldPrice-PriceAddition;
    this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    this.OrderbuttonDisabled(updatedIngredients)

  
}
  render() {
   
      const DisabledInfo={
          ...this.state.ingredients
      }
      for(let key in DisabledInfo){
          DisabledInfo[key]= DisabledInfo[key]<=0
      }
      let Orderdata= <OrderSummary ingredients={this.state.ingredients} 
      cancelbtn={this.CancelbuttonFun} 
      checkoutbtn={this.CheckoutbuttonFun} 
      orderprice={this.state.totalPrice}/>;

      if(this.state.loading){
          Orderdata =<Loader/>
      }
    
    return (
        <div>
            <Modal showModal={this.state.PurchaseMode}  modalClosed={this.modalClosedfun}>
            {Orderdata}
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            
            <BuilderControls Burgerprice={this.state.totalPrice} purchase={this.purchase} orderdisabled={this.state.Orderbuttondisabled} ingredientsAdded={this.addIngredient} ingredientsRemove={this.removeIngredient} lessDisabled={DisabledInfo}/>
        </div>
    );
  }
}

export default Burgerking;