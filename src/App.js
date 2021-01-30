/** Libraries */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Pages */
import { HomePage } from './pages/homepage';
import { Shop } from './pages/shop';
import { SignPage } from './pages/sign-page';
import { CheckoutContainer } from './pages/checkout';

/** Components */
import { Header } from './components/header';

/** Redux elements */
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

/** Styles */
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/shop' component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignPage />
            }
          />
          <Route exact path='/checkout' component={CheckoutContainer} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSession })(App);
