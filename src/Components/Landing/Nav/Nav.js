import React, { Component } from "react";

import "./Nav.scss";

class Nav extends Component {
  state = {
    nav: false,
    hover: false
  };

  onNav = () => {
    this.setState({ nav: !this.state.nav });
  };

  mouseOver = () => {
    this.setState({ hover: true });
  };
  mouseOut = () => {
    this.setState({ hover: false });
  };
  render() {
    const { hover, nav } = this.state;

    return (
      <div className="Nav">
        <div
          className="navContainer"
          onClick={this.onNav}
          onMouseEnter={this.mouseOver}
          onMouseLeave={this.mouseOut}
        >
          <div className={nav ? "line line1 line1Nav" : "line line1"} />
          <div className={nav ? "line line2 line2Nav" : "line line2"} />
          <div className={nav ? "line line3 line3Nav" : "line line3"} />
        </div>
        <div
          className="navInfo"
          className={this.state.nav ? "navigation" : "noNavigation"}
        >
          <h1>Info</h1>
        </div>
      </div>
    );
  }
}

export default Nav;
