/** Libraries */
import React, { Component } from 'react';

/** Components */
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

/** Utilities */
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

/** Styles */
import './sign-in.styles.scss';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  onHandleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  onHandleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onHandleSubmit}>
          <FormInput type='email' name='email' value={this.state.email} required handleChange={this.onHandleChange} label='Email' />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            required
            handleChange={this.onHandleChange}
            label='Password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
