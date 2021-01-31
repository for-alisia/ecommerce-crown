// @ts-nocheck
/** Libraries */
import React, { useState } from 'react';
import { connect } from 'react-redux';

/** Components */
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

/** Redux elements */
import { signUpStart } from '../../redux/user/user.actions';

/** Styles */
import { SignUpContainer, TitleContainer } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword, displayName } = credentials;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account</TitleContainer>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          label='Name'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          label='Email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          label='Confirm password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton className='sign-up-button' type='submit'>
          SIGN UP
        </CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => dispatch(signUpStart(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
