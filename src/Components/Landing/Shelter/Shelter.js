import React from "react";

import "./Shelter.scss";
import Counter from "../PageCounter/Counter";

const Shelter = props => {
  const page = 3;
  return (
    <div className="Project Shelter">
      <Counter page={page} />
      <div className="info">
        <h1>Shelter</h1>
      </div>
    </div>
  );
};

export default Shelter;
