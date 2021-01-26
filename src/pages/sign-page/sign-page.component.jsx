/** Libraries */
import React from 'react';

/** Components */
import { SignIn } from '../../components/sign-in';
import { SignUp } from '../../components/sign-up';

/** Styles */
import './sign-page.styles.scss';

export const SignPage = () => (
  <div className='sign-page'>
    <SignIn />
    <SignUp />
  </div>
);
