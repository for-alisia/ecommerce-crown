/** Libraries */
import React, { Component } from 'react';

/** Components */
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

/** Styles */
import './sign-in.styles.scss';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log('submitted');

    this.setState({
      email: '',
      password: ''
    });
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
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
