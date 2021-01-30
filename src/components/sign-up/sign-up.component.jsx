// @ts-nocheck
/** Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/** Components */
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

/** Redux elements */
import { signUpStart } from '../../redux/user/user.actions';

/** Styles */
import { SignUpContainer, TitleContainer } from './sign-up.styles';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, displayName } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signUpStart({ email, password, displayName });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='Name'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='email'
            label='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='Password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='Confirm password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton className='sign-up-button' type='submit'>
            SIGN UP
          </CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => dispatch(signUpStart(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
