import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'; 

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//this gets called, regardless if any items are being added, every time a state updates
//this causes a lot of re-rendering, reduce always returns a new value even if no change
//negative for performance
//solution: store or cache the data so rerender doesn't happen, memoization + reselect
/*const mapStateToProps = ({cart: {cartItems}}) => ({
    //selector
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => 
    accumalatedQuantity + cartItem.quantity, 0)
})*/

//passes whole reducer state into selector, which flows accordingly
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);