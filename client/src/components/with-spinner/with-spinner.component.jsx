/** Libraries */
import React from 'react';

/** Components */
import Spinner from '../spinner/spinner.component';

/** HOC to wrap any Component to add possibility render a Spinner */
const withSpinner = (Wrapped) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <Wrapped {...otherProps} />;
};

export default withSpinner;
