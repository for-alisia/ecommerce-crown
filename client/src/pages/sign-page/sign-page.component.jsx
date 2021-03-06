/** Libraries */
import React from 'react';

/** Components */
import { SignIn } from '../../components/sign-in';
import { SignUp } from '../../components/sign-up';

/** Styles */
import { SignUpPageContainer } from './sign-page.styles';

const SignPage = () => (
  <SignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignUpPageContainer>
);

export default SignPage;
