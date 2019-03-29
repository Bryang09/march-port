import React, { Component } from "react";

import ReactPageScroller from "react-page-scroller";

import Hero from "./Hero/Hero";
import Clothing from "./Clothing/Clothing";
import Shelter from "./Shelter/Shelter";
import Watches from "./Watches/Watches";
import Movies from "./Movies/Movies";
import Anime from "./Anime/Anime";

import { Projects } from "./projects";
class Landing extends Component {
  render() {
    return (
      <ReactPageScroller className="Landing">
        <Hero />
        <Clothing project={Projects.clothing} />
        <Watches project={Projects.watches} />
        <Shelter project={Projects.shelters} />
        <Movies project={Projects.movies} />
        <Anime project={Projects.anime} />
      </ReactPageScroller>
    );
  }
}

export default Landing;
