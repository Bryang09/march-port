import React from "react";

import "./Shelter.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";

const Shelter = props => {
  const page = 3;

  const { project } = props;

  return (
    <div className="Project Shelter">
      <Counter page={page} />
      <Info project={project} />
    </div>
  );
};

export default Shelter;
