import React from "react";

import "./Watches.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";
import Nav from "../Nav/Nav";

const Watches = props => {
  const { project } = props;

  return (
    <>
      <div className="Project Watches">
        <div className="img watches" />
        <Counter id={project.id} />
        <Info project={project} />
      </div>
    </>
  );
};

export default Watches;
