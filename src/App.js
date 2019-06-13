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
import { logout } from "./helpers/auth";

import Navi from "./layout/nav";

// TODO: Massive export these?
import Index from "./pages/public/index";
import DashboardPage from "./pages/dashboard";
import GoalsPage from "./pages/goals";
import NotFound from "./pages/404";
import Login from "./pages/login";

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
    loading: true,
    user: null
  };

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user != null) {
        this.setState({ authed: true, loading: false, user: user.uid });
      } else {
        this.setState({ authed: false, loading: false });
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
          <Navi auth={this.state.authed} />
          <Push>
            <Switch>
              <PublicRoute
                path="/"
                authed={this.state.authed}
                exact
                component={Index}
              />
              <PublicRoute
                authed={this.state.authed}
                path="/login"
                component={props => (
                  <Login {...props} loading={this.state.loading} />
                )}
              />
              <PrivateRoute
                authed={this.state.authed}
                path="/dashboard"
                component={props => (
                  <DashboardPage {...props} user={this.state.user} />
                )}
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

const Push = styled.div`
  margin-left: 25rem;
  @media (max-width: 1500px) {
    margin-left: 0rem;
  }
`;
