import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import SetNotes from './components/SetNotes'

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/notes' component={SetNotes} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
