import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { css, keyframes } from "styled-components";
import { base } from "../components/fire";
import { NavLink } from "react-router-dom";

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
    const uid = this.props.user;
    base.bindCollection(`users/${uid}/goals`, {
      context: this,
      state: "goals",
      then() {
        this.setState({ loading: false });
      }
    });

    base
      .get(`users/${uid}/info`, { context: this, asArray: false })
      .then(data => {
        let fName = "";
        let lName = "";

        const mapp = data.map(aaa => {
          fName = aaa.first;
          lName = aaa.last;
        });

        this.setState({ fName: fName, lName: lName });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const listItem = this.state.goals.map((item, index) => {
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

    return (
      <>
        <Helmet title="Unplan | Dashboard" />
        <Welcome>
          <Details>
            <h2>Welcome, {this.state.fName ? this.state.fName : "👽"}</h2>
            <NavLink to="/account">
              <Button>Profile</Button>
            </NavLink>
          </Details>
        </Welcome>

        <List>
          <h2>Recent Goals</h2>
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

const Welcome = styled.div`
  background: #ffffff url(${profilePic}) center no-repeat;
  background-blend-mode: multiply;

  box-shadow: 0 0 28px 10px rgba(0, 0, 0, 0.2);

  width: 98%;
  max-width: 1000px;
  height: 15rem;

  margin: 0 auto;

  @media (max-width: 1500px) {
    margin: 1rem auto;
  }
`;

const Details = styled.div`
  background: #eeeeee;
  @supports (background: rgba(255, 255, 255, 0.8)) {
    background: rgba(255, 255, 255, 0.8);
  }

  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    font-family: "Fira Sans", sans-serif;
    font-weight: 300;

    margin: 0;
  }
`;

const Button = styled.button`
  background: #393e46;
  color: #ffffff;
  text-transform: uppercase;

  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const List = styled.div`
  background: white;
  box-shadow: 0 0 28px 10px rgba(0, 0, 0, 0.2);

  margin: 5rem auto 0;

  max-width: 1000px;

  @media (max-width: 1500px) {
    margin: 5rem auto;
  }

  h2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 4rem;

    color: #333333;
    @supports (color: rgba(0, 0, 0, 0.5)) {
      color: rgba(0, 0, 0, 0.5);
    }

    display: inline-block;
    margin: -4rem 0 -4rem 1rem;
  }

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

const PulseOut = keyframes`
  to{
    transform: scale(1);
  }
  from{
    transform: scale(1.5);
  }
`;

const Loading = styled.div`
  font-size: 2rem;
  color: #999999;
  font-weight: bolder;

  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${PulseOut} infinite 3s alternate ease-in-out;
`;
