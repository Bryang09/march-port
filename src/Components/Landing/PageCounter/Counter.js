import React, { Component } from "react";

import "./Counter.scss";

import { Projects } from "../projects";

class Counter extends Component {
  render() {
    const { id } = this.props;

    const keys = Object.keys(Projects);
    const length = keys.length;

    console.log(length);

    return (
      <div className="Counter">
        <h4>
          <span className="page">{id}</span> / {length}
        </h4>
        <h4 className="projects">Projects</h4>
      </div>
    );
  }
}

export default Counter;
