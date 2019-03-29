import React from "react";

import "./Anime.scss";
import Counter from "../PageCounter/Counter";

const Anime = props => {
  const page = 2;
  return (
    <div className="Project Anime">
      <Counter page={page} />
      <div className="info">
        <h1>Anime</h1>
      </div>
    </div>
  );
};

export default Anime;
