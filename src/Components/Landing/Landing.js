import React, { Component } from "react";

import ReactPageScroller from "react-page-scroller";

import Hero from "./Hero/Hero";
import Project1 from "./Project1/Project1";

class Landing extends Component {
  render() {
    return (
      <ReactPageScroller className="Landing">
        <Hero />
        <Project1 />
      </ReactPageScroller>
    );
  }
}

export default Landing;
