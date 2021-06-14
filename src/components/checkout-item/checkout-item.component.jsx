import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';





//pass in the full item bc manipulation will happen to the item (quantity or remove)
const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    
    const {name, quantity, price, imageUrl} = cartItem;

    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={require('../../assets/images/shop-img/'+imageUrl).default} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>
            &#10005;
        </div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);