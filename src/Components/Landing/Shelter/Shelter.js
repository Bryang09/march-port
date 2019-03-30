import React from "react";

import "./Shelter.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";

const Shelter = props => {
  const { project } = props;

  return (
    <div className="Project Shelter">
      <div className="img shelter" />
      <Counter id={project.id} />
      <Info project={project} />
    </div>
  );
};

export default Shelter;
