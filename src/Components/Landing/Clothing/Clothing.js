import React, { Component } from "react";

import "./Clothing.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";

import { Projects } from "../projects";

class Clothing extends Component {
  render() {
    const page = 1;

    console.log(this.props.project);

    const { project } = this.props;

    return (
      <div className={`Project ${project.class}`}>
        <Counter page={page} />
        <Info project={project} />
      </div>
    );
  }
}

export default Clothing;
