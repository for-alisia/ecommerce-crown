/** Libraries */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** Pages */
import { HomePage } from './pages/homepage';
import { Shop } from './pages/shop';
import { SignPage } from './pages/sign-page';

/** Components */
import { Header } from './components/header';

/** Utilities */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/** Styles */
import './App.css';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
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
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              // TODO: remove later
              console.log(this.state);
            }
          );
        });
      } else {
        /** Set state for null user */
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
