import React from 'react'
import './checkout.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsCount, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({cartItems, cartItemsCount, cartTotal}) => {      
        return (
            <div className='checkout-page '>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                

                {
                    (cartItemsCount > 0) ? (
                        cartItems
                        .map(cartItem => {
                            console.log('cartDropdown: ', cartItem)
                            return(
                                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                            )
                        })
                    ) : (
                        <span className='empty-meassage'>Your cart is empty</span>
                    )
                    
                }

                <span className='total'>Total: ${cartTotal}</span>
            </div>
            
        )
    }


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsCount: selectCartItemsCount,
    cartTotal: selectCartTotal,
}) //used memoize/caching using 'reselect'

export default connect(mapStateToProps)(CheckoutPage)