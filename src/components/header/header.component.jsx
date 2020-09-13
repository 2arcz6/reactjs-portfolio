import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown-logo.svg'

import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => {

    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />    
            </Link>

            <div className='options'>
                 <Link className='option' to='/shop'>Shop</Link>
                 <Link className='option' to='/shop'>Contact</Link>
                 
                 {
                     currentUser ? 
                        <div className='option' onClick={()=> auth.signOut()} >Sign Out</div>
                     :
                        <Link className='option' to='/signin'>Sign In</Link>
                 }

                <CartIcon />
            </div>
            {
                hidden ? 
                    null
                :
                    <CartDropdown />
            }
            
            
        </div>
    )
}

/* const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden
}) */

/* const mapStateToProps = state => ({
    currentUser: selectcurrentUser(state),
    hidden: selectCartHidden(state)
}) */ //used memoize/caching using 'reselect'

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}) //used memoize/caching using 'reselect'


export default connect(mapStateToProps)(Header)