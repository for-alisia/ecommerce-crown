/** Libraries */
import React, { Component } from 'react';
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

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    if (email && password) {
      emailSignInStart(email, password);
    }
  };

  onHandleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onHandleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            handleChange={this.onHandleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            required
            handleChange={this.onHandleChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
