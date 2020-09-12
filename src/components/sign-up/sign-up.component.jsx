import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',

        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        console.log('handleSubmit: ',this.state)

        const {displayName,email, password, confirmPassword } = this.state

        if(password !== confirmPassword){
            alert(`password don't match`)
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }, ()=>{console.log('reset state: ',this.state)})
        }catch(error){ 
            console.log('error on sign up', error)
        }

        
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({[name]: value}, ()=>{console.log(this.state)})
    }

    render(){
        const {displayName,email, password, confirmPassword } = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" id="" value={displayName} onChange={this.handleChange} label='Name' required />
                    <FormInput type="email" name="email" id="" value={email} onChange={this.handleChange} label='Email' required />
                    <FormInput type="password" name="password" id="" value={password} onChange={this.handleChange} label='Password' required />
                    <FormInput type="password" name="confirmPassword" id="" value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                   
                    <div className='buttons'>
                        <CustomButton type="submit">Sign Up</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>{''}Sign up with Google{''}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SignUp