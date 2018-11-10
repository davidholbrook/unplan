import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import Index from "./pages/index";
import Logo from "./images/logo.svg";

import Dashboard from "./components/icons/dashboard";
import Goals from "./components/icons/goals";
import Support from "./components/icons/support";

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
              <NavLink exact={true} activeClassName="is-active" to="/">
                <li>
                  <Dashboard iconFill="#b9bab9" />
                  Dashboard
                </li>
              </NavLink>
              <NavLink activeClassName="is-active" to="/goals">
                <li>
                  <Goals iconFill="#b9bab9" />
                  Goals
                </li>
              </NavLink>
              <NavLink activeClassName="is-active" to="/supports">
                <li>
                  <Support iconFill="#b9bab9" />
                  Supports
                </li>
              </NavLink>
            </ul>
          </Nav>
          <Route path="/" exact component={Index} />
          <Route component={NotFound} />
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

    a {
      color: #eeeeee;
      text-decoration: none;
      font-weight: bold;

      font-weight: bold;

      &.is-active {
        color: #fd7014;
        svg path {
          fill: #fd7014;
        }
      }
    }

    li {
      font-size: 1.5rem;

      margin: 0;
      padding: 1rem 0 1rem 1.5rem;

      display: flex;
      align-items: center;

      border-top: 1px solid #979797;
      &:last-child {
        border-bottom: 1px solid #979797;
      }

      svg {
        margin-right: 1rem;
      }
    }
  }
`;
