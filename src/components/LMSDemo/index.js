// import { useState } from "react";

import React from "react";

class LMSDemo extends React.Component {
  render() {
    return (
      <div
        id="demo"
        className={`container-fluid slide-down-panel ${
          this.props.LMSActive ? "active" : ""
        }`}
      >
        <div class="row">
          <div class="col-sm toggle-row" id="">
            <button
              className="button btn-danger"
              onClick={() => this.props.toggleDemoLMS()}
            >
              End demo
            </button>
          </div>
        </div>
        <div class="row demo-interface" id="">
          <div class="col col-3">
            <div class="wrapper">
              <h1>Demo</h1>
              <h3>column 1</h3>
            </div>
          </div>
          <div class="col col-9">
            <div class="wrapper">
              <h3>col 2</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LMSDemo;
