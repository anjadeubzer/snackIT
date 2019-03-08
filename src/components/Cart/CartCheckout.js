import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
    renderOrder = ( key ) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';

        // localStore error avoided
        if( !fish ) return null;

        if( !isAvailable ) {
            return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available!</li>
        }
        return(
            <li key={key}>
                {count} lb {fish.name}
                { formatPrice( count * fish.price ) }
                <button onClick={() => this.props.removeFromOrder( key )}>&times;</button>
            </li>
        );
    };
    render() {
        const orderIds = Object.keys( this.props.order );
        const total = orderIds.reduce( ( prevTotal, key ) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';

            if( isAvailable ) {
                return prevTotal + ( count * fish.price );
            }
            return prevTotal;
        }, 0 );


        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map( this.renderOrder  )}
                </TransitionGroup>

                <div className="total">Total: <strong>{ formatPrice(total) }</strong></div>

            </div>
        );
    }
}

export default Order;