import React from "react";

import "./Anime.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";

const Anime = props => {
  const page = 5;
  const { project } = props;

  return (
    <div className="Project Anime">
      <Counter page={page} id={project.id} />
      <Info project={project} />
    </div>
  );
};

export default Anime;
