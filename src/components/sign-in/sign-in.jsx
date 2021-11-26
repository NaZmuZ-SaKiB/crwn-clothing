import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            alert('Sign in Successful')
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />

                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <ButtonsBarContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </ SignInContainer>
        )
    }
}

export default SignIn;