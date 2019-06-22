import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";

import Background from "../../images/homepage_bg.png";
import Logo from "../../images/logo--white.svg";
import DownArrow from "../../images/down-arrow.svg";

const index = () => {
  const GlobalStyle = createGlobalStyle`
  body{
    background: #333333 url(${Background}) repeat-x !important;
  }

`;
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Inner>
          <img src={Logo} alt="Unset Logo" width="60%" />
          <h1>Unplan your day</h1>
          <a href="/login">
            <Button className="button large expanded">LOG IN</Button>
          </a>
          <More src={DownArrow} alt="There's More" />
        </Inner>
      </Wrapper>
    </>
  );
};

export default index;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10vh 0;

  /* counteract the push from app.js */
  @media (min-width: 1500px) {
    margin-left: -25rem;
  }
`;

const Inner = styled.div`
  width: 30rem;
  text-align: center;
  h1 {
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    font-weight: 700;

    margin: 2rem 0;
  }
`;

const Button = styled.button`
  background-color: #fd7014;
`;

const upDown = keyframes`
from{
  transform: translate( 0rem, 0rem);
  opacity: 0.2;
}
to{
  transform: translate( 0rem, 1rem);
  opacity: 1;
}
`;

const More = styled.img`
  animation: ${upDown} 2s linear alternate infinite;
  margin-top: 10vh;
`;
