import React from 'react'
import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

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

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '',password: ''})
        }catch(error){
            console.log('error on login with email and password', error)
        }

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
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" id="" value={this.state.email} onChange={this.handleChange} label='Email' required />
                    {/* <label htmlFor="email">Email</label> */}
                    <FormInput type="password" name="password" id="" value={this.state.password} onChange={this.handleChange} label='Password' required />
                    {/* <label htmlFor="password">Password</label> */}


                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn={true}>{''}Sign in with Google{''}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SignIn