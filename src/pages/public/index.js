import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../components/icons/logo";
import Background from "../../images/homepage_bg.png";

const index = () => {
  return (
    <MainWrapper>
      <div>
        <Logo width="200px" height="200px" iconFill="#FD7014" />
        <Promo>Plan for Real Life!</Promo>
        <NavLink to="/login">
          <button>Get started</button>
        </NavLink>
        <NavLink to="/about">Learn More</NavLink>
      </div>
    </MainWrapper>
  );
};

export default index;

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background: #393e46 url(${Background}) repeat-x;

  display: flex;

  padding-top: 5rem;
  justify-content: center;

  margin-left: -25rem;
  @media (max-width: 1500px) {
    margin-left: 0px;
  }

  div {
    width: 50rem;

    padding: 2rem;
    text-align: center;

    ul {
      margin-left: 3rem;
      text-align: left;
    }

    a {
      color: #ffffff;
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

const Promo = styled.h2`
  font-size: 2rem;
  font-weight: 300;

  color: #ffffff;
  text-transform: uppercase;

  letter-spacing: 5px;
`;
