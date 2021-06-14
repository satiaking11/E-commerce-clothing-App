import React from 'react';

import './checkout-item.styles.scss';

//pass in the full item bc manipulation will happen to the item (quantity or remove)
const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={require('../../assets/images/shop-img/'+imageUrl).default} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>
            &#10005;
        </div>
    </div>
);

export default CheckoutItem;