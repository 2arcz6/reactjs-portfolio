export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity+1 }
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const clearItem = (cartItems, cartItemToClear) => {
    //remove or clear item from cart
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        //quantity of item is 1 left
        //remove or clear item from cart
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity-1 }
        : cartItem
    )
}

