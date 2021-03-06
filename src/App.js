import React, { Component } from "react";

import ReactPageScroller from "react-page-scroller";

import Hero from "./Components/Hero/Hero";
import Project1 from "./Components/Project1/Project1";

class App extends Component {
  render() {
    return (
      <ReactPageScroller className="App">
        <Hero />
        <Project1 />
      </ReactPageScroller>
    );
  }
}

export default App;
