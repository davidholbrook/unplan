import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth } from "./components/fire";

import Logo from "./images/logo.svg";

import Index from "./pages/index";
import DashboardPage from "./pages/dashboard";
import GoalsPage from "./pages/goals";
import NotFound from "./pages/404";
import Login from "./pages/login";

import Dashboard from "./components/icons/dashboard";
import Goals from "./components/icons/goals";
import Support from "./components/icons/support";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
}

class App extends Component {
  state = {
    authed: false,
    loading: true
  };

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.authed === true ? (
            <Nav>
              <h1>
                <img src={Logo} alt="Unset Logo" />
                Unplan your life
              </h1>
              <ul>
                <NavLink activeClassName="is-active" to="/dashboard">
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
          ) : null}
          <Push>
            <Switch>
              <Route path="/" exact component={Index} />
              <PublicRoute
                authed={this.state.authed}
                path="/login"
                component={Login}
              />
              <PrivateRoute
                authed={this.state.authed}
                path="/dashboard"
                component={DashboardPage}
              />
              <PrivateRoute
                authed={this.state.authed}
                path="/goals"
                component={GoalsPage}
              />
              <Route component={NotFound} />
            </Switch>
          </Push>
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

const Push = styled.div`
  margin-left: 25rem;
`;
