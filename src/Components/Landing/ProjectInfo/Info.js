import React from "react";

import "./Info.scss";
const Info = props => {
  console.log(props);

  const { project } = props;

  return (
    <div className="info">
      <h1 className="number">0{project.id}.</h1>
      <h1>{project.name}</h1>
      <h3>{project.desc}</h3>
      <div className="buttons">
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          <h5>Demo</h5>
        </a>
        <a
          href={project.code}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>Code</h5>
        </a>
      </div>
    </div>
  );
};

export default Info;
