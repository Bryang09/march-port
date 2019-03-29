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
          {page}/{total}
        </h4>
      </div>
    );
  }
}

export default Counter;
