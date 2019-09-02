import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { logout } from "../helpers/auth";

import Logo from "../images/logo.svg";

// TODO: combine all these icons into one
import Dashboard from "../components/icons/dashboard";
import Goals from "../components/icons/goals";
import Support from "../components/icons/support";

const Navi = ({ auth }) => {
  return (
    <div>
      {auth === true ? (
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

            <button
              onClick={() => {
                logout();
              }}
              className="navbar-brand"
            >
              Logout
            </button>
          </ul>
        </Nav>
      ) : null}
    </div>
  );
};

export default Navi;

const Nav = styled.nav`
  background: #393e46;
  color: #eeeeee;
  font-family: "Fira Sans", sans-serif;

  position: static;
  width: 100vw;

  display: flex;
  justify-content: space-between;

  h1 {
    text-transform: uppercase;

    display: flex;
    align-items: center;

    @media(max-width: 1500px){
      font-size: 1.2rem;
    }
  }

  img {
    margin: 0 0.5rem;
  }

  ul {
    list-style: none;
    margin: 0 -1rem 0 -3.5rem;

    display: flex;
    padding-right: 2rem;

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
      margin: -.5rem 0 0 0;
      @media(min-width:1500px){
        margin: .5rem 0 0 0;
      }
      padding: 1rem 0 1rem 1.5rem;

      display: flex;
      align-items: center;
      height: 76px;

      svg {
        margin-right: 1rem;
        @media(max-width: 1500px){
          height: 20px;
          margin-right: .1rem;
        }
      }

      @media(max-width: 1500px){
        font-size: 1rem;

        border-top: none;
      }

    }
      button {
      background: #fd7014;

      font-size: 1.5rem;
      text-transform: uppercase;
      color: #ffffff;

      border: none;

      display: flex;


      padding: 1rem 2rem;
      margin: 1rem 1rem 1rem 3rem;

      @media(max-width: 1500px){
        font-size: 1rem;
        padding: .5rem;
        margin: 1rem 0 0 2rem;
        height: 2rem;
      }
      }

`;
