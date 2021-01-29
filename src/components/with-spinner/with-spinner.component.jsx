/** Libraries */
import React from 'react';

/** Styles */
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

/** HOC to wrap any Component to add possibility render a Spinner */
const withSpinner = (Wrapped) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Wrapped {...otherProps} />
  );
};

export default withSpinner;
