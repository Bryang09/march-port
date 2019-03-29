import React from "react";

import "./Watches.scss";
import Counter from "../PageCounter/Counter";

const Watches = props => {
  const page = 2;
  return (
    <div className="Project Watches">
      <Counter page={page} />
      <div className="info">
        <h1>Watches</h1>
      </div>
    </div>
  );
};

export default Watches;
