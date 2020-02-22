import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { base } from "../components/fire";
import { NavLink } from "react-router-dom";

import Loading from "../styles/bits/loading";

import profilePic from "../images/profile-image.jpg";
import Goals from "../components/icons/goals";
import Support from "../components/icons/support";

class Dashboard extends Component {
  state = {
    goals: [],
    fName: "",
    lName: "",
    loading: true
  };

  componentWillMount() {
    base.get("goals", { context: this }).then(data => {
      this.setState({ loading: false });
      this.setState({ goals: data });
    });

    base
      .get("users", { context: this, asArray: false })
      .then(data => {
        let fName = "";
        let lName = "";

        data.map(aaa => {
          fName = aaa.firstname;
          lName = aaa.lastname;
        });

        this.setState({ fName: fName, lName: lName });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let listItem = null;
    if (this.state.goals.length !== 0) {
      listItem = this.state.goals.map((item, index) => {
        return (
          <li key={index}>
            {item.name}
            <span>
              <Support iconFill="#b9bab9" width="20px" height="20px" />
              {item.supports}
            </span>
          </li>
        );
      });
    } else {
      listItem = (
        <div className="centered space">
          <button className="button large">Make your First Goal</button>
        </div>
      );
    }

    return (
      <>
        <Helmet title="Unplan | Dashboard" />
        <Welcome className="spacer">
          <div>
            <h2>Welcome, {this.state.fName ? this.state.fName : "👽"}</h2>
            <NavLink to="/account">
              <button className="button secondary">Change Profile</button>
            </NavLink>
          </div>
        </Welcome>

        <List>
          <h2 className="fancy">Recent Goals</h2>
          {this.state.loading === true ? (
            <Loading> Loading, hold on!</Loading>
          ) : (
            <ul>{listItem ? listItem : "No Goals created yet!"}</ul>
          )}
        </List>
      </>
    );
  }
}

export default Dashboard;

const Welcome = styled.section`
  background: #ffffff url(${profilePic}) center no-repeat;
  background-blend-mode: multiply;
  height: 15rem;

  div {
    background: rgba(255, 255, 255, 0.8);

    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const List = styled.section`
  ul {
    list-style: none;
    margin-left: 1rem;
  }

  li {
    font-size: 1.3rem;

    display: flex;
    justify-content: space-between;

    margin-right: 0.5rem;
    padding: 1rem 0;

    border-top: 1px solid #e9e9e9;

    svg {
      margin-right: 0.5rem;
    }

    span {
      color: #b9bab9;
    }
  }
`;
