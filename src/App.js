import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'

import Header from './components/header/header.component'


import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import './App.css';

class App extends React.Component {

  /* constructor(){
    super()

    this.state = {
      currentUser: null
    }
  } */ //this.state

  unsubscribeFromAuth = null
  componentDidMount(){
    auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: userAuth}, ()=>{console.log(userAuth)})
      console.log(userAuth)
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        console.log('userRef: ', userRef)
        // ;(await userRef).onSnapshot(snapshot => {
        userRef.onSnapshot(snapshot => {
          console.log('onSsnapshot', snapshot)
          /* this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {console.log('setState: ', this.state)}) */ //this.state

          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })//redux
        })
        // console.log(this.state)
      }
      // console.log(this.state)
      // this.setState({currentUser: userAuth}) //this.state
      this.props.setCurrentUser(userAuth)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div className='App'>
        {/* <Header currentUser={this.state.currentUser} /> //this.state */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route  path='/shop' component={ShopPage} /> 
          <Route  path='/signin' component={SignInAndSignUpPage} /> 
          {/* <Route path='/shop/hats' component={HatsPage} />  */}
        </Switch>
      </div>
    );
  }
}

/* const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <button onClick={() => props.history.push('/')}>Home</button>
      <h1>Hats Page</h1>
    </div>
  )
}  */

/* const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} /> 
      <Route  path='/shop' component={ShopPage} /> 
      <Route  path='/signin' component={SignInAndSignUpPage} /> 
      {/* <Route path='/shop/hats' component={HatsPage} />  
    </Switch>
  </div>

) */

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
