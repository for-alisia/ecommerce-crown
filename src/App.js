/** Libraries */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Pages */
import { HomePage } from './pages/homepage';
import { Shop } from './pages/shop';
import { SignPage } from './pages/sign-page';
import { Checkout } from './pages/checkout';

/** Components */
import { Header } from './components/header';

/** Utilities */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/** Redux elements */
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

/** Styles */
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    /** Get the user from Google Auth and pass it to firestore.
     * If user doesn't exist, create new user in DB
     * Then set state with new user
     */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        /** if user from Google auth isn't null, get the reference for him
         * from the firestore DB (if he doesn't exist there, this function will
         * create new user in DB)
         */
        const userRef = await createUserProfileDocument(userAuth);

        /** Get data for the user from firestore DB and uodate state */
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        /** Set state for null user */
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
