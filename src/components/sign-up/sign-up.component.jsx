/** Libraries */
import React, { Component } from 'react';

/** Components */
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

/** Utilities */
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

/** Styles */
import './sign-up.styles.scss';

export class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmPassword, displayName } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type='text' label='Name' name='displayName' value={displayName} onChange={this.handleChange} required />
          <FormInput type='email' label='Email' name='email' value={email} onChange={this.handleChange} required />
          <FormInput type='password' label='Password' name='password' value={password} onChange={this.handleChange} required />
          <FormInput
            type='password'
            label='Confirm password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
