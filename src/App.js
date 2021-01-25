/** Libraries */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** Components */
import { HomePage } from './pages/homepage';

/** Styles */
import './App.css';

const HatsEx = () => <div>Hats Page</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop/hats' component={HatsEx} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
