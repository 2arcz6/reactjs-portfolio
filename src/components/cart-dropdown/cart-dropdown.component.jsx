import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>

                {
                    cartItems
                    .map(cartItem => {
                        console.log('cartDropdown: ', cartItem)
                        return(
                            <CartItem key={cartItem.id} cartItem={cartItem}/>
                        )
                    })
                }
                
            </div>
            <CustomButton >Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    // cartItems: cartItems //same as below
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)