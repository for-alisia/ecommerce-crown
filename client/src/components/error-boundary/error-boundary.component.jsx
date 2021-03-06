/** Libraries */
import React from 'react';

/** Styles */
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };
  static getDerivedStateFromError(error) {
    //process the error
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/flHudHE.png'} />
          <ErrorImageText>Sorry, this page is lost somewhere...</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
