import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllBeers(props) {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      setAllBeers(res.data);
    });
  }, []);

  console.log(allBeers);
  function ShowBeers() {
    return allBeers.map((beer) => {
      return (
        <Link to={`/one-beer/${beer._id}`}>
          <div className="beers">
            <img src={beer.image_url} style={{ width: '15%' }} />
            <div>
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <h5>{beer.contributed_by}</h5>
            </div>
          </div>
          <hr></hr>
        </Link>
      );
    });
  }
  return (
    <div>
      AllBeers
      <ShowBeers />
    </div>
  );
}

export default AllBeers;
// to={`/beers/${eachBeer._id}`} key={eachBeer._id}>
//           {eachBeer.name}
// let [allbeers, setAllBeers] = useState([]);

//   useEffect(
//     async function () {
//       let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
//       console.log(res);
//       setBeers(res.data);
//     },
//     [props]
//   );
//   const GetBeers = () => {
//     return beers.map((eachBeer) => {
//       return (
//         <Link to="/all">
//           <div>
//             <ul
//               key={eachBeer._id}
//               style={{ maxWidth: '100px', height: '100px' }}
//               style={{ listStyle: 'none' }}
//             >
//               <img src={eachBeer.image_url} />
//               <li>{eachBeer.name}</li>
//               <li>{eachBeer.tagline}</li>
//               <li>Created by: {eachBeer.contributed_by}</li>
//             </ul>
//           </div>
//         </Link>
//       );
//     });
//   };
//   return (
//     <div>
//       <div>{/* <GetBeers /> */}</div>
//       <Switch>
//         <Route exact path="/" render={(props) => <Home {...props} />} />
//         <Route exact path="/all" render={(props) => <GetBeers {...props} />} />
//         <Route
//           exact
//           path="/beers/:beerId"
//           render={(props) => <Beer {...props} />}
//         />
//       </Switch>
//     </div>
//   );
