import React, { Component } from "react";

import ReactPageScroller from "react-page-scroller";

import Hero from "./Hero/Hero";
import Clothing from "./Clothing/Clothing";
import Shelter from "./Shelter/Shelter";

class Landing extends Component {
  render() {
    return (
      <ReactPageScroller className="Landing">
        <Hero />
        <Clothing />
        <Shelter />
      </ReactPageScroller>
    );
  }
}

export default Landing;
