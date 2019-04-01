import React, { Component } from "react";

import "./Clothing.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";
import Nav from "../Nav/Nav";

class Clothing extends Component {
  render() {
    console.log(this.props.project);

    const { project } = this.props;

    const color = "#051735";

    return (
      <>
        {/* <Nav color={color} /> */}

        <div className="Project Clothing">
          <div className="img clothing" />
          <Counter id={project.id} />
          <Info project={project} />
        </div>
      </>
    );
  }
}

export default Clothing;
