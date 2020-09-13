import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

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

/* const mapStateToProps = ({cart:{cartItems}}) => ({
    // cartItems: cartItems //same as below
    cartItems
}) */

/* const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
}) */


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
}) //used memoize/caching using 'reselect'



export default connect(mapStateToProps)(CartDropdown)