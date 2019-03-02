import React, { Component } from 'react';
import './burger.css'
import BurgerIngredient from './burgeringredient/burgeringrediet'
class Burger extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    let transformedIngrediets = Object.keys(this.props.ingredients)
      .map(id => {
        return [...Array(this.props.ingredients[id])].map((_, i) => {
          return <BurgerIngredient key={id + i} type={id} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el)
      }, []);


    if (transformedIngrediets.length === 0) {
      transformedIngrediets = <p>Please start adding ingredients</p>
    }
    return (
      <div className="Burger">
        <BurgerIngredient type="bread-top">
        </BurgerIngredient>
        {transformedIngrediets}
        <BurgerIngredient type="bread-bottom">
        </BurgerIngredient>
      </div>
    );
  }
}

export default Burger;