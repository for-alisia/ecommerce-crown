/** Libraries */
import React, { useState } from 'react';
import { connect } from 'react-redux';

/** Components */
import { FormInput } from '../form-input';
import { CustomButton } from '../custom-button';

/** Redux elements */
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

/** Styles */
import {
  SignInContainer,
  ButtonsContainer,
  TitleContainer,
} from './sign-in.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      emailSignInStart(email, password);
    }
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>

      <form onSubmit={onHandleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          required
          handleChange={onHandleChange}
          label='Email'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          required
          handleChange={onHandleChange}
          label='Password'
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
