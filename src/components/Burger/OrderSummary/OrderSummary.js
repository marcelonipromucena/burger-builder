import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const
            ingredientSummary = Object.keys(this.props.ingredients)
                .map(igKey => {
                    return (
                        <li key={igKey}>
                            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                        </li>
                    );
                });

        return <Auxiliary>
            <h3>Your order</h3>
            <p>A Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: </strong> {this.props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    }
}

export default OrderSummary;