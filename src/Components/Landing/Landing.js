import React, { Component } from "react";

import ReactPageScroller from "react-page-scroller";

import Hero from "./Hero/Hero";
import Clothing from "./Clothing/Clothing";
import Shelter from "./Shelter/Shelter";
import Watches from "./Watches/Watches";
import Movies from "./Movies/Movies";
import Anime from "./Anime/Anime";

class Landing extends Component {
  render() {
    return (
      <ReactPageScroller className="Landing">
        <Hero />
        <Clothing />
        <Watches />
        <Shelter />
        <Movies />
        <Anime />
      </ReactPageScroller>
    );
  }
}

export default Landing;
