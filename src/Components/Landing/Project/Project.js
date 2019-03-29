import React from "react";

const Project = props => {
  console.log(props);

  return (
    <div className={`Project ${props.project.class}`}>
      <div className="info">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Project;
