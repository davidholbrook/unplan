import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./pages/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>This is the navagation.</nav>
          <Route path="/" exact component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;
