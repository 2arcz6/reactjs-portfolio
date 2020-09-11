import React from 'react'
import './sign-in.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" id="" value={this.state.email} onChange={this.handleChange} label='Email' required />
                    {/* <label htmlFor="email">Email</label> */}
                    <FormInput type="password" name="password" id="" value={this.state.password} onChange={this.handleChange} label='Password' required />
                    {/* <label htmlFor="password">Password</label> */}


                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>{''}Sign in with Google{''}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SignIn