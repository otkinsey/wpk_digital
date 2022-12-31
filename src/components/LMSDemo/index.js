// import { useState } from "react";

import React from "react";

class LMSDemo extends React.Component {
  render() {
    return (
      <div id="demo" className={`demo ${this.props.LMSActive ? "active" : ""}`}>
        <button
          className="button btn-danger"
          onClick={() => this.props.toggleDemoLMS()}
        >
          End demo
        </button>
        <h1>Demo</h1>
      </div>
    );
  }
}

export default LMSDemo;
