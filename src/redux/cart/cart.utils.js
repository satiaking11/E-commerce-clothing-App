export const addItemsToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        //return new array so change is triggered and rerender happens
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem 
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}