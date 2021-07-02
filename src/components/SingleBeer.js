import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleBeer = (props) => {
  console.log(props);
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
      .then((res) => {
        setBeer(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <img src={beer.image_url} />
      {beer.name}
      {beer.description}
    </div>
  );
};

export default SingleBeer;

// function Beer(props) {
//   //   let [beer, setBeer] = useState([]);
//   //   useEffect(
//   //     async function () {
//   //       let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
//   //       console.log(res);
//   //       setBeer(res.data);
//   //     },
//   //     [props]
//   //   );
//   //   console.log(props);
//   //   return <div>Beer {props.match.params._id}</div>;
//   return <div></div>;
// }
