import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'

import Header from './components/header/header.component'


import { auth } from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user}, ()=>{console.log(user)})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
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

export default App;
