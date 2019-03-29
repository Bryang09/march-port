import React, { Component } from "react";

import "./Clothing.scss";
import Counter from "../PageCounter/Counter";

class Clothing extends Component {
  state = {
    page: 1
  };
  render() {
    const { page } = this.state;
    return (
      <div className="Project Clothing">
        <Counter page={page} />
        <div className="info">
          <h1>Clothing</h1>
        </div>
      </div>
    );
  }
}

export default Clothing;
