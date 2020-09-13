import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({toggleCartHidden, totalItemsCount}) => {

    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            {/* <Link className='logo-container' to='/'> */}
                <ShoppingIcon className='shopping-icon' />   
                <span className='item-count'>{totalItemsCount}</span> 
            {/* </Link> */}
        </div>
    )
}

/* const mapStateToProps = (state) => ({
    totalItemsCount: selectCartItemsCount(state)
}) */

const mapStateToProps = createStructuredSelector({
    totalItemsCount: selectCartItemsCount
}) //used memoize/caching using 'reselect'

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)