

import React, { Component } from 'react';

import PropTypes from 'prop-types'
import './burgeringredient.css';
class burgeringredient extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):

                    ingredient = <div className="BreadBottom "></div>
                break;
            case ('cheese'):
            ingredient = <div className="Cheese "></div>
                
                break;
            case ('bacon'):
            ingredient = <div className="Bacon "></div>

                break;
            case ('salad'):
                ingredient = <div className="Salad "></div>
    
                    break;
            case ('bread-top'):
                    ingredient = <div className="BreadTop ">
                        <div className="Seeds1 "></div>
                        <div className="Seeds2 "></div>
                    </div>
                    break;
            default:
                ingredient = null;

        }
        return ingredient;
    }
};

burgeringredient.PropTypes = {
    type: PropTypes.string.isRequired
}
export default burgeringredient;