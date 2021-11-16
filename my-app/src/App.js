import "./App.css";
import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Black Pearl</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
