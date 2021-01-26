/** Libraries */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

/** Pages */
import { HomePage } from './pages/homepage';
import { Shop } from './pages/shop';
import { SignPage } from './pages/sign-page';

/** Components */
import { Header } from './components/header';

/** Utilities */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/** Redux elements */
import { setCurrentUser } from './redux/user/user.actions';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        /** if user from Google auth isn't null, get the reference for him
         * from the firestore DB (if he doesn't exist there, this function will
         * create new user in DB)
         */
        const userRef = await createUserProfileDocument(userAuth);

        /** Get data for the user from firestore DB and uodate state */
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
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
          <Route path='/signin' component={SignPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
