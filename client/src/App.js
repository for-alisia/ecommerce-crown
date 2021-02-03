/** Libraries */
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Components */
import { Header } from './components/header';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

/** Redux elements */
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

/** Styles */
import { GlobalStyle } from './global.styles';

/** Pages */
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const SignPage = lazy(() => import('./pages/sign-page/sign-page.component'));
const CheckoutContainer = lazy(() =>
  import('./pages/checkout/checkout.container')
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <SignPage />)}
            />
            <Route exact path='/checkout' component={CheckoutContainer} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSession })(App);
