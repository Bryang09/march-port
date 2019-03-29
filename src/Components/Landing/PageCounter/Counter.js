import React, { Component } from "react";

import "./Counter.scss";

class Counter extends Component {
  state = {
    total: 5
  };
  render() {
    const { page } = this.props;
    const { total } = this.state;
    return (
      <div className="Counter">
        <h4>
          <span className="page">{page}</span> /{total}
        </h4>
        <h4 className="projects">Projects</h4>
      </div>
    );
  }
}

export default Counter;
