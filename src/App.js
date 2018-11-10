import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Index from "./pages/index";
import Logo from "./images/logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav>
            <h1>
              <img src={Logo} alt="Unset Logo" />
              Unplan your life
            </h1>
            <ul>
              <li>Dashboard</li>
              <li>Goals</li>
              <li>Support</li>
            </ul>
          </Nav>
          <Route path="/" exact component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;

const Nav = styled.nav`
  background: #393e46;
  color: #eeeeee;
  font-family: "Fira Sans", sans-serif;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;

  padding: 1rem;

  h1 {
    text-transform: uppercase;

    display: flex;
    align-items: center;
  }

  img {
    margin: 0 0.5rem;
  }

  ul {
    list-style: none;
    margin: 0 -1rem 0 -3.5rem;

    li {
      font-size: 1.5rem;

      margin: 0;
      padding: 1rem 0 1rem 1.5rem;

      border-top: 1px solid #979797;
      &:last-child {
        border-bottom: 1px solid #979797;
      }
    }
  }
`;
