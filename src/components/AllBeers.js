import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Beer from './Beer';
import Home from './Home';

function AllBeers(props) {
  let [beers, setBeers] = useState([]);

  useEffect(
    async function () {
      let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
      console.log(res);
      setBeers(res.data);
    },
    [props]
  );
  const GetBeers = () => {
    return beers.map((eachBeer) => {
      return (
        <Link to="/all">
          <div>
            <ul
              key={eachBeer._id}
              style={{ maxWidth: '100px', height: '100px' }}
              style={{ listStyle: 'none' }}
            >
              <img src={eachBeer.image_url} />
              <li>{eachBeer.name}</li>
              <li>{eachBeer.tagline}</li>
              <li>Created by: {eachBeer.contributed_by}</li>
            </ul>
          </div>
        </Link>
      );
    });
  };
  return (
    <div>
      <div>{/* <GetBeers /> */}</div>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/all" render={(props) => <GetBeers {...props} />} />
        <Route
          exact
          path="/beers/:beerId"
          render={(props) => <Beer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default AllBeers;
// to={`/beers/${eachBeer._id}`} key={eachBeer._id}>
//           {eachBeer.name}
