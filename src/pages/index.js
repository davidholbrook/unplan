import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Background from "../images/homepage_bg.png";

const index = () => {
  return (
    <LoginWrapper>
      <div>
        <h1>Unplan your day!</h1>
        <ul>
          <li>Plan like a kid</li>
          <li>Learn like an adult</li>
          <li>Love to Plan</li>
        </ul>
        <NavLink to="/login">
          <button>Get started today!</button>
        </NavLink>
      </div>
    </LoginWrapper>
  );
};

export default index;

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background: #393e46 url(${Background}) no-repeat;
  background-size: cover;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-left: -25rem;
  @media (max-width: 1500px) {
    margin-left: 0px;
  }

  div {
    background: #ffffff;

    box-shadow: 0 0 28px 10px rgba(0, 0, 0, 0.2);
    width: 20rem;

    padding: 2rem;
    text-align: center;

    ul {
      margin-left: 3rem;
      text-align: left;
    }
  }

  button {
    background: #fd7014;

    font-size: 1.5rem;
    text-transform: uppercase;
    color: #ffffff;

    border: none;

    display: block;
    margin: 2rem auto;
    padding: 1rem 2rem;
  }
  a {
    text-decoration: none;
  }
`;
