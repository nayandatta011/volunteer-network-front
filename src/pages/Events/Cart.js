import React from 'react';

const Cart = (props) => {
    const { title, img } = props.event;
    return (
        <div className='card'>
            <img src={img} alt={title} />
            <div className='cart__content'>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Cart;