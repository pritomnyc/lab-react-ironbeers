import React from 'react';
import logo from './logo.svg';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Beers from './assets/beers.png';
import RandomBeer from './assets/random-beer.png';
import NewBeer from './assets/new-beer.png';
import AllBeers from './components/AllBeers';

function App() {
  return (
    <div className="App">
      <AllBeers />
    </div>
  );
}

export default App;
