import React from "react";

import "./Movies.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";

const Movies = props => {
  const page = 4;

  const { project } = props;

  return (
    <div className="Project Movies">
      <Counter page={page} />
      <Info project={project} />
    </div>
  );
};

export default Movies;
