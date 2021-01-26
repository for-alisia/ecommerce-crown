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
import { auth } from './firebase/firebase.utils';

/** Styles */
import './App.css';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
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
