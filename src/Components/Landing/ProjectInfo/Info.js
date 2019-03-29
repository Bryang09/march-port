import React from "react";

import "./Info.scss";
const Info = props => {
  console.log(props);

  const { project } = props;

  return (
    <div className="info">
      <h1>{project.name}</h1>
      <h3>{project.desc}</h3>
    </div>
  );
};

export default Info;
