import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ObjArrFun from "./ObjArrFun";
import MapArr from "./MapArr";
import Reduce from "./Reduce";
import RedCon from "./RedCon";
import RedCounter from "./RedCounter";
import FilterArr from "./FilterArr";
import GroupByFun from "./GroupByFun";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MapArr />
        <ObjArrFun />
        <Reduce />
        <RedCon /> */}
        {/* <RedCounter /> */}
        {/* <FilterArr /> */}
        <GroupByFun />
      </div>
    );
  }
}

export default App;
