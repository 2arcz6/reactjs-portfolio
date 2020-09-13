import React from 'react'
import './checkout-item.styles.scss'


import { connect } from 'react-redux'
import { clearItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
            
        </div>
    )
}

/* const mapStateToProps = createStructuredSelector({
    totalItemsCount: selectCartItemsCount
}) //used memoize/caching using 'reselect' */

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)