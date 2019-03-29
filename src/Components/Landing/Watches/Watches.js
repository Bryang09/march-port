import React from "react";

import "./Watches.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";

const Watches = props => {
  const page = 2;

  const { project } = props;

  return (
    <div className="Project Watches">
      <Counter id={project.id} />
      <Info project={project} />
    </div>
  );
};

export default Watches;
