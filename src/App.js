import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
  {
    id: 1,
    name : "kimchi",
    image : "http://placehold.it/320x100",
    rating :4
  },
  {
    id: 2,
    name : "lamen",
    image : "http://placehold.it/320x100",
    rating :2
  },
  {
    id: 3,
    name : "bubu",
    image : "http://placehold.it/320x100",
    rating :3
  }
]

function Food({name, image, rating}) {
  return (
    <div>
      <img src={image} alt="img"></img>
      <h1>l like {name}</h1>
      <h4>rating : {rating}</h4>
    </div>
  );
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}
function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
