import React, { Component } from "react";

import "./Clothing.scss";
import Counter from "../PageCounter/Counter";
import Info from "../ProjectInfo/Info";

class Clothing extends Component {
  render() {
    console.log(this.props.project);

    const { project } = this.props;


    return (
      <>

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
