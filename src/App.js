/** Libraries */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** Pages */
import { HomePage } from './pages/homepage';
import { Shop } from './pages/shop';
import { SignPage } from './pages/sign-page';

/** Components */
import { Header } from './components/header';

/** Styles */
import './App.css';

function App() {
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

export default App;
