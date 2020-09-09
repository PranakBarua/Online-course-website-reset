import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0;i<cart.length;i++){
        total=total+cart[i].price;
    }
    return (
        <div>
            <h3>Order Details</h3>
            <h5>courses : {cart.length}</h5>
            <h5>Price : {total}</h5>
        </div>
    );
};

export default Cart;