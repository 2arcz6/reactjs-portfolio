import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors'


import { withRouter} from 'react-router-dom'

const CartDropdown = ({cartItems, cartItemsCount, history}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>

                {
                    (cartItemsCount) ? (
                        cartItems
                        .map(cartItem => {
                            console.log('cartDropdown: ', cartItem)
                            return(
                                <CartItem key={cartItem.id} cartItem={cartItem}/>
                            )
                        })
                    ) : (
                        <span className='empty-meassage'>Your cart is empty</span>
                    )
                    
                }
                
            </div>
            <CustomButton onClick={() => history.push('/checkout')} > Go To Checkout</CustomButton>
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
    cartItems: selectCartItems,
    cartItemsCount: selectCartItemsCount,
}) //used memoize/caching using 'reselect'



export default withRouter(connect(mapStateToProps)(CartDropdown))