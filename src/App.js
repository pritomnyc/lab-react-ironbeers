import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import RandomBeer from './components/RandomBeer';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/beers" render={(props) => <AllBeers />} />
        <Route
          exact
          path="/random-beer"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route
          exact
          path="/new-beer"
          render={(props) => <NewBeer {...props} />}
        />
        <Route
          exact
          path="/one-beer/:id"
          render={(props) => <SingleBeer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
