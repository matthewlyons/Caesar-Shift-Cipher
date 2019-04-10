import React, { Component } from "react";

import Navbar from "./components/navbar";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
