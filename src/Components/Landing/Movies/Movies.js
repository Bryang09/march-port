import React from "react";

import "./Movies.scss";
import Counter from "../PageCounter/Counter";

const Movies = props => {
  const page = 4;

  return (
    <div className="Project Movies">
      <Counter page={page} />
      <div className="info">
        <h1>Movies</h1>
      </div>
    </div>
  );
};

export default Movies;
